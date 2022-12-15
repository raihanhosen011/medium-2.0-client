// imports
import { Poppins } from '@next/font/google';
//
import '../shared/styles/globals.css'
import Providers from '@redux/config/providers';

// font
const poppins = Poppins({ weight: "400" })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={poppins.className} >
      <head>
        <title> Home : Next 13 blog </title>
      </head>

      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
