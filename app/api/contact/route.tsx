import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, budget, message, name, company } = body

    const contactFirstName = firstName || name?.split(" ")[0] || ""
    const contactLastName = lastName || name?.split(" ").slice(1).join(" ") || ""
    const fullName = contactFirstName + (contactLastName ? ` ${contactLastName}` : "")

    console.log("[v0] Contact form submission received:", {
      firstName: contactFirstName,
      lastName: contactLastName,
      email,
      phone,
      budget,
      company,
      message,
      timestamp: new Date().toISOString(),
    })

    if (process.env.RESEND_API_KEY) {
      try {
        // Send notification email to your team
        await resend.emails.send({
          from: "Kriptech Contact Form <noreply@yourdomain.com>", // Replace with your verified domain
          to: ["contact@kriptech.com"], // Replace with your email
          subject: `New Contact Form Submission from ${fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #f97316;">New Contact Form Submission</h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
                ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
                ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
                <p><strong>Message:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #f97316;">${message}</p>
              </div>
              <p style="color: #666; font-size: 14px;">Submitted on ${new Date().toLocaleString()}</p>
            </div>
          `,
        })

        // Send confirmation email to the user
        await resend.emails.send({
          from: "Kriptech Team <noreply@yourdomain.com>", // Replace with your verified domain
          to: [email],
          subject: "Thank you for contacting Kriptech!",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #f97316;">Thank you for reaching out!</h2>
              <p>Hi ${contactFirstName},</p>
              <p>We've received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you within 24 hours.</p>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Your Message:</h3>
                <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #f97316;">${message}</p>
              </div>
              <p>Best regards,<br>The Kriptech Team</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
              <p style="color: #666; font-size: 14px;">
                Kriptech - Web Development & Digital Solutions<br>
                Founded by Tarendra Mallick
              </p>
            </div>
          `,
        })

        console.log("[v0] Emails sent successfully via Resend")
      } catch (emailError) {
        console.error("[v0] Email sending failed:", emailError)
        // Continue with success response even if email fails
      }
    } else {
      console.log("[v0] RESEND_API_KEY not configured, skipping email sending")
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Sorry, there was an error sending your message. Please try again.",
      },
      { status: 500 },
    )
  }
}
