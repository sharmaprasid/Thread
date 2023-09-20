import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Topbar from '@/components/shared/Topbar'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Threads',
  description: 'Nextjs13 with threads'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Topbar />
          <main>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>
            <RightSidebar />
          </main>


          <Bottombar /></body>
      </html>
    </ClerkProvider>
  )
}