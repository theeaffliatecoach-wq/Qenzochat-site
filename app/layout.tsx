import './globals.css'

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
      <body
        className="
          min-h-screen
          bg-white text-black
          dark:bg-black dark:text-white
          transition-colors duration-500
        "
      >
        {children}
      </body>
    </html>
  )
}