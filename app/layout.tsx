import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Query Performance Map — Visual Heatmap of Slow Queries',
  description: 'Interactive D3.js visualization showing which database tables and queries are causing performance bottlenecks. Built for backend developers and DBAs.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4cac3c02-a9ba-4c82-a7cf-cf351cb1d58e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
