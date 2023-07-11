import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from "@/app/components/ThemeProvider";
import {ReactNode,FC} from "react";
import {Poppins} from "next/font/google";
import {Roboto_Serif} from "next/font/google";
import {Metadata} from "next";
import environments from "@/app/environments";
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
const DELIVERY_TOKEN=environments.DELIVERY_TOKEN;
const SPACE_ID=environments.SPACE_ID;
const RootLayout:FC<Props> =({children})=> {
  return (
    <html lang="en" className={`${poppins.variable} ${Roboto.variable}`}>
     <head>
         <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
     </head>
      <body >
      <ThemeProvider DELIVERY_TOKEN={DELIVERY_TOKEN} SPACE_ID={SPACE_ID}>
      {children}
      <script id="dsq-count-scr" src="//code-brothers.disqus.com/count.js" async></script>
      </ThemeProvider>
      </body>
    </html>
  )
}
export default RootLayout
