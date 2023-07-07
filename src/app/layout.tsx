import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from "@/app/components/ThemeProvider";
import {ReactNode,FC} from "react";
import {Poppins} from "next/font/google";
import {Roboto_Serif} from "next/font/google";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Code Brothers',
    description: 'Developers Community',

}
const poppins=Poppins({
    subsets:['latin'],
    weight:["100","200","300","400","500","600","700","800","900"],
    style:["normal","italic"],
    variable: '--font-Poppins',
})
const Roboto=Roboto_Serif({
    subsets:['latin'],
    weight:["100","200","300","400","500","600","700","800","900"],
    style:["normal","italic"],
    variable: '--font-Roboto',
})

interface Props{
    children:ReactNode
}
const RootLayout:FC<Props> =({children})=> {
  return (
    <html lang="en" className={`${poppins.variable} ${Roboto.variable}`}>
     <head>

         <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
     </head>
      <body >
      <ThemeProvider>
      {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
export default RootLayout
