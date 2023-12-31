"use client"
import React, {FC, useState} from 'react'
import {useTheme} from "next-themes";
import {IoReorderThreeSharp} from "react-icons/io5"
import Link from "next/link";
import {CiDark} from "react-icons/ci"

type Category = {
    title: string,
    id: string,
    href: string
}

interface Categories {
    category: Category[],
    siteTitle: string
}

const Navbar: FC<Categories> = ({category, siteTitle}) => {
    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [isMobi, SetMobi] = useState<boolean>(false)
    const MobiBtn = () => {
        SetMobi(!isMobi)
    }

    return (
        <>
            <header className="text-gray-600 bg-dark bg-white md:sticky z-[100] md:top-0">
                <section className="container mx-auto flex flex-col flex-wrap p-5 md:flex-row">
                    <Link href={"/"} className="flex order-1  title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img  className={`w-16 md:w-20`} src="/logo.svg" alt={siteTitle}/>
                        <span className="ml-3 text-xl capitalize font-bold ">{siteTitle}</span>
                    </Link>
                    <nav className={` md:ml-auto  flex  flex-wrap items-center text-base order-2`}>
                        <ul className={`md:mt-0 ${isMobi ? "h-[250px]" : "h-0"} transition-all md:h-auto  duration-500 overflow-hidden md:overflow-auto flex flex-col md:flex-row`}>
                            {category.map((item: Category) => {
                                return <Link href={item.href} key={item.id}>
                                    <li className={`text-xl mx-4 my-4 md:my-0 `}>
                                        {item.title}
                                    </li>
                                </Link>
                            })}
                        </ul>

                    </nav>
                    <div className="md:flex md:static order-3 absolute right-4 md:flex-row">
                        <button className={`     bg-light sm:bg-transparent sm:p-0 rounded-full p-2 `} onClick={() => {
                            theme == "dark" ? setTheme('light') : setTheme("dark")
                        }}>
                            <CiDark className={`text-xl sm:text-2xl text-white sm:text-black  dark:text-white`}/>
                        </button>
                        <button className={` md:hidden ml-4  bg-primary rounded-full p-2 `} onClick={MobiBtn}>
                            <IoReorderThreeSharp className={`text-xl sm:text-2xl text-white  dark:text-white`}/>
                        </button>
                    </div>
                </section>
                <hr className={`h-[2px] bg-black  bg-opacity-60`}/>
            </header>
        </>
    )
}

export default Navbar