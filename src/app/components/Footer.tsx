import React, {FC} from "react"
import Link from "next/link"
import {BsLinkedin, BsGithub, BsFacebook, BsInstagram} from "react-icons/bs"


type socialIcons = {
    facebook: string
    linkedin: string
    github: string
    instagram: string
}

interface Props {
    siteTitle: string
    socialIcons: socialIcons
}

const Footer: FC<Props> = ({siteTitle, socialIcons}) => {
    return (
        <footer className="text-gray-600 bg-dark">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">

                    <img className={`w-20`} src="/logo.svg" alt={siteTitle}/>
                    <span className="ml-3 text-xl capitalize font-bold text-gray-900">{siteTitle}</span>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    &copy;
                    {`${new Date().getFullYear()} ${siteTitle} — `}
                    <Link href={socialIcons.linkedin} className="dark:text-white text-gray-600 ml-1" rel="noopener noreferrer"
                          target="_blank">@shkwahab</Link>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <Link href={socialIcons.linkedin}>
                        <BsLinkedin className={`mx-2 text-xl sm:text-2xl`}/>
                    </Link>

                    <Link href={socialIcons.github}>
                        <BsGithub className={`mx-2 text-xl sm:text-2xl`}/>
                    </Link>

                    <Link href={socialIcons.facebook}>
                    <BsFacebook className={`mx-2 text-xl sm:text-2xl`}/>
                    </Link>

                    <Link href={socialIcons.instagram}>
                     <BsInstagram className={`mx-2 text-xl sm:text-2xl`}/>
                    </Link>

            </span>
            </div>
        </footer>
    )
        ;
};
export default Footer
