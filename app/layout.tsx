import Slidebar from '../components/Slidebar';
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
      <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem'>
      <Slidebar/>
      </div>
        {/* SlideBar */}
        {/* ClientProvider - Notification */}

        <div className="bg-[#343541] flex-1" >{children}</div>
        </div>
        </body>
    </html>
  )
}
