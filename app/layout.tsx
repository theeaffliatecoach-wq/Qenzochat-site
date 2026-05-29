import './globals.css'

export const metadata = {
  title: 'QenzoChat.com',
  description: 'Chat and earn online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

   <html
  lang="en"
  suppressHydrationWarning
  className="dark"
  data-scroll-behavior="smooth"
>
      <body
        className="
          bg-white
          text-black
          dark:bg-black
          dark:text-white
          transition-colors
          duration-500
        "
      >

        {children}

      </body>

    </html>

  )
}