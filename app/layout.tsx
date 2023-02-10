import '../styles/globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex">

        {/* SlideBar */}

        {/* ClientProvider - Notification */}

        </div>
        <div className="bg-[#343541] flex-1" >{children}</div>
        </body>
    </html>
  )
}
