import '../styles/globals.css'

export const metadata = {
  title: 'Next13 Chat',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex">

          {/* Sidebar */}

          {/* Client Provider */}

          <div className="bg-div flex-1">
            { children }  
          </div>

        </div>
      </body>
    </html>
  )
}
