import React, {FC, useState} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {pojoaque} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {BsFillClipboardFill} from 'react-icons/bs';
import {AiOutlineCheck} from 'react-icons/ai'

interface Props {
    code: string;
    codetype:string
    backgroundColor: string;
}
const Code: FC<Props> = ({code, backgroundColor,codetype}) => {

    const bgTransparent = '#161421';

    const customStyle = {
        ...pojoaque,
        'pre[class*="language-"]': {
            ...pojoaque['pre[class*="language-"]'],
            background: bgTransparent,
            borderRadius: 10,
            fontSize: 15,


        },
    };

    const [clipboard, setShowClipboard] = useState(false)
    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setShowClipboard(true)
            setTimeout(()=> {
                setShowClipboard(false)
            },2000)
        } catch (err) {
            console.error('Failed to copy code to clipboard:', err);
            setShowClipboard(false)
        }
    };

    return (
        <>
            <div className="relative overflow-auto mx-auto w-[310px] sm:w-[520px] md:w-10/12 ">
                <SyntaxHighlighter language={codetype}  wrapLongLines={true} showLineNumbers={false} wrapLines={true} style={customStyle}>
                    {code}
                </SyntaxHighlighter>
                <div className={`cursor-pointer  flex items-center gap-2 top-3 md:top-5 absolute right-4 text-white`} onClick={copyCode}>
                    {
                        clipboard === false ? <BsFillClipboardFill className={`text-sm sm:text-base`}/>:<AiOutlineCheck className={`text-sm sm:text-base`}/>
                    }
                    <span className={`${clipboard?"hidden":""} special text-xs sm:text-sm`}>Copy Code</span>
                    <span className={`${clipboard?"":"hidden"} special text-xs sm:text-sm`}>Copied!</span>
                    </div>
                </div>
        </>
    );
};

export default Code;
