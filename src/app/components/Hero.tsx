"use client"
import React, {FC, useEffect, useState} from 'react';
import Link from "next/link"
import Image from "next/image"

type Billboard={
    description:string
   image:string
}
interface Props{
    billboard:Billboard
}
const Hero:FC<Props> = ({billboard}) => {
    const [text, setText] = useState('');
    const words = ['developer', 'designer']; // Array of words you want to type out
    const typingSpeed = 100; // Adjust the typing speed here
    const wordPause = 1000; // Adjust the pause between words here

    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;

        const typeText = () => {
            setText(words[wordIndex].substring(0, charIndex));

            if (charIndex < words[wordIndex].length) {
                charIndex++;
            } else {
                setTimeout(() => {
                    charIndex = 0;
                    wordIndex = (wordIndex + 1) % words.length; // Loop back to the beginning of the words array
                    setTimeout(typeText, typingSpeed);
                }, wordPause);
                return;
            }

            setTimeout(typeText, typingSpeed);
        };

        typeText();
    }, []);


    return (

        <section id={`hero-Section`}>

            <div

                className="container mx-auto flex px-5 md:py-20 sm:py-16 py-10 lg:py-24 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="font-semibold sm:text-xl text-lg mb-4  "> Hello There
                        <br/>
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                           We are Passionate <span
                            className={` pb-1 capitalize border-b-2 border-black dark:border-white`}>
                                        {text}
                                    </span>
                           </span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        {billboard.description }
                    </p>
                    <div className="flex justify-center">
                        <Link href={"/portfolio"}
                              className="inline-flex text-white bg-buttonLight bg-buttonLight border-0 py-2 px-6 focus:outline-none  rounded text-lg">Portfolio
                        </Link>
                        <Link href={"#contact"}
                              className="ml-4 inline-flex   bg-buttonDark border-0 py-2 px-6 focus:outline-none rounded text-lg">Contact
                            Us
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full  md:w-1/2 w-5/6">
                    <Image className={`rounded-md`} src={billboard.image}
                           alt={`hero Image`}
                           width={`720`} height={`600`}/>
                </div>
            </div
                >
        </section>


    );
}

export default Hero;