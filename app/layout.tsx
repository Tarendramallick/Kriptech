import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Kriptech - Professional Web Development Solutions",
  description:
    "Expert web development solutions tailored for your business. Kriptech crafts your vision into reality with stunning, functional websites.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    preconnect: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <body className="font-body">{children}</body>
      </html>
    </ThemeProvider>
  )
}
