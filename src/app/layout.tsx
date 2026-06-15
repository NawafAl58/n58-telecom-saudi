import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'N58 Telecom | Saudi SIM Finder',
  description: 'Interactive SIM card finder for Saudi Arabia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
