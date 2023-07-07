"use client"
import React,{FC,useState} from 'react'
import { useTheme } from "next-themes";
import Link from "next/link";
import {CiDark} from "react-icons/ci"
type Category={
    title:string,
    id:string,
    href:string
}
interface Categories{
    category:Category[],
    siteTitle:string
}
const Navbar: FC<Categories> = ({ category,siteTitle }) => {
        const { systemTheme, theme, setTheme } = useTheme();
        const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
   <>
   <header className="text-gray-600 body-font sticky top-0">
  <div className="container mx-auto md:flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={"/"} className="flex  title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl capitalize font-medium">{siteTitle}</span>
        <button className={`md:hidden absolute right-8  bg-primary rounded-full p-2 `} onClick={()=>{
            theme == "dark"? setTheme('light'): setTheme("dark")
        }}>
            <CiDark className={`text-xl sm:text-2xl text-white  dark:text-white`}/>
        </button>
    </Link>
    <nav className={` md:ml-auto  md:flex flex-wrap items-center text-base justify-center`}>
        <ul className={`mt-8 md:mt-0 md:flex`}>
        {category.map((item:Category)=>{
            return <Link href={item.href}>
                <li className={`text-xl mx-4 my-4 md:my-0 `}>
                {item.title}
             </li>
            </Link>
        })}
        </ul>

    </nav>
<button className={`md:block hidden bg-primary rounded-full p-2 `} onClick={()=>{
    theme == "dark"? setTheme('light'): setTheme("dark")
}}>
    <CiDark className={`text-xl sm:text-2xl text-white  dark:text-white`}/>
</button>
  </div>
</header>
   </>
  )
}

export default Navbar