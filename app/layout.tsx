import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'QenzoChat.site',
  description: 'Chat and earn online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en" suppressHydrationWarning>

      <body>

        <ThemeProvider attribute="class" defaultTheme="dark">

          {children}

        </ThemeProvider>

      </body>

    </html>

  )
}