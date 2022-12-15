// imports
import { Poppins } from '@next/font/google';
//
import '../shared/styles/globals.css'


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
        {children}

      </body>
    </html>
  )
}
