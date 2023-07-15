"use client"
import React, {FC, useState} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {pojoaque} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {BsFillClipboardFill} from 'react-icons/bs';
import {AiOutlineCheck} from 'react-icons/ai'
import Image from "next/image";

type Nav = {
    id: string
    code: string
    codetype: string
    image: string
}

interface Props {
    Navbar: Nav[]
}

const CompCode: FC<Props> = ({Navbar}) => {
    // const [active,setActive]=useState(false);
    const [active, setActive] = useState<boolean[]>(Array(Navbar.length).fill(false));

    const toggleActive = (index: number) => {
        const activeState = [...active];
        activeState[index] = !activeState[index];
        activeState[index] = true
        setActive(activeState);

    };

    const toggleActiveFalse = (index: number) => {
        const activeState = [...active];
        activeState[index] = !activeState[index];
        activeState[index] = false
        setActive(activeState);
    };

    const bgTransparent = '#161421';

    const customStyle = {
        ...pojoaque,
        'pre[class*="language-"]': {
            ...pojoaque['pre[class*="language-"]'],
            background: bgTransparent,
            borderRadius:0,
            borderBottomRightRadius:4,
            borderBottomLeftRadius:4,

            fontSize: 15,


        },
    };
    const [clipboard, setShowClipboard] = useState(false)

    const copyCode = async (code: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setShowClipboard(true)
            setTimeout(() => {
                setShowClipboard(false)
            }, 2000)
        } catch (err) {
            console.error('Failed to copy code to clipboard:', err);
            setShowClipboard(false)
        }
    };
    return (
        <section id={`component_code`}>
            <div className="flex flex-wrap  m-10">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Navs</h2>
                    <div className="h-1 w-20 bg-primary rounded"></div>
                </div>
            </div>
            {Navbar.map((item, index) => {
                return <div key={item.id} className={`my-12`}>
                    <div className={`  w-10/12 mx-auto `}>
                        <div
                            className="p-4 flex rounded-t-md border  border-gray-400  justify-center">
                            <button onClick={() => {
                                toggleActiveFalse(index)
                            }}
                                    className={`bg-gray-200 ${active[index] ? "" : "text-primaryColor"} mx-4 p-2 rounded-md  text-lg sm:text-xl`}>Preview
                            </button>
                            <button onClick={() => {
                                toggleActive(index)
                            }}
                                    className={`bg-gray-200 ${active[index] ? "text-primaryColor" : ""} mx-4 p-2 rounded-md  text-lg sm:text-xl`}>React
                            </button>
                        </div>
                        <div className={`${active[index] ? "hidden" : "block"}`}>
                            <img src={item.image}
                                 alt={"navbar"}
                                 className={`w-full border-gray-400 border border-t-0 rounded-b-md h-auto`}/>
                        </div>
                        <div className={`${active[index] ? "relative" : "hidden"} `}>
                            <SyntaxHighlighter language={item.codetype} wrapLongLines={true} showLineNumbers={false}
                                               wrapLines={true} style={customStyle}>


                                {item.code}
                            </SyntaxHighlighter>
                            <div
                                className={`cursor-pointer  flex items-center gap-2 top-3 md:top-5 absolute right-4 text-white`}
                                onClick={() => {
                                    copyCode(item.code)
                                }}>
                                {
                                    clipboard === false ? <BsFillClipboardFill className={`text-sm sm:text-base`}/> :
                                        <AiOutlineCheck className={`text-sm sm:text-base`}/>
                                }
                                <span
                                    className={`${clipboard ? "hidden" : ""} special text-xs sm:text-sm`}>Copy Code</span>
                                <span
                                    className={`${clipboard ? "" : "hidden"} special text-xs sm:text-sm`}>Copied!</span>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </section>
    );
}

export default CompCode;