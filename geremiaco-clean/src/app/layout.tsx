import './globals.css'

export const metadata = {
  title: 'Geremiaco',
  description: 'Geremiaco landing page'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">
        {children}
      </body>
    </html>
  )
}
