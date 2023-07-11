"use client"
import React, {FC, useRef, useEffect, useState} from 'react';
import RichText from "@/app/components/RichText";
import Script from "next/script"
import Link from "next/link"
import Image from "next/image";

type Article = {
    title: string;
    description: string;
    image: string;
    date: Date;
    category: string;
    article: any;
};
type LatestArticles = {
    id: string
    title: string
    description: string
    image: string
    slug: string
}
type RelatedArticles = {
    id: string
    title: string
    description: string
    image: string
    slug: string
}

interface Props {
    article: Article;
    latestArticles: LatestArticles[];
    relatedArticles: RelatedArticles[];
}

const Article: FC<Props> = ({article, latestArticles, relatedArticles}) => {
    const splitTitle = (title: string) => {
        const words = title.split(' ');
        if (words.length > 5) {
            const firstLine = words.slice(0, 5).join(' ');
            const remainingWords = words.slice(5).join(' ');
            return (
                <>
                    {firstLine}
                    <span className={`block my-3`}>{remainingWords}</span>
                </>
            );
        }
        return title;
    };
    const splitText = (title: string, maxWordsPerLine: number) => {
        const words = title.split(' ');
        const lines = [];
        let line = '';

        for (let i = 0; i < words.length; i++) {
            if ((line + words[i]).length > 0 && i !== 0 && i % maxWordsPerLine === 0) {
                lines.push(line.trim());
                line = '';
            }
            line += words[i] + ' ';
        }

        lines.push(line.trim());

        return lines.map((line, index) => (
            <span className={`block special`} key={index}>
                {line}
            </span>
        ));
    };
    const divEle: any = useRef()

    const [isSticky,setSticky]=useState(true)
      useEffect(()=>{
          const observer= new IntersectionObserver((enteries)=>{
              const entry=enteries[0];
           if(entry.isIntersecting){
               setSticky(false)
           }
           else{
               setSticky(true)
           }
          })
          observer.observe(divEle.current)
      },[])

    return (
        <section id="article">
            <div className="relative">
                <img
                    className="brightness-50 w-screen h-[510px] md:h-[400px] object-cover object-center"
                    src={article.image}
                    alt={article.title}
                />
                <div className="absolute m-8 top-20">
                    <h3 className="text-sm sm:text-base my-2 text-gray-200 capitalize dark:text-gray-200">
                        Published in {article.category}
                    </h3>
                    <h1 className="text-xl  sm:text-2xl capitalize md:text-3xl text-white">{splitTitle(article.title)}</h1>
                    <p>{splitText(article.description, 12)}</p>
                </div>
            </div>
            <div className="relative z-20  -top-5 md:-top-10 bg-gray-200 dark:bg-gray-900 p-8  rounded-md mx-2 md:mx-4">
                <div className="grid md:grid-cols-[2fr_.8fr] md:mx-4">
                    <div>
                        <article className={`md:pr-20`}>
                            <RichText content={article.article}/>
                        </article>
                        <div id={`CommentEngine`}>
                            <div className='my-8 md:mr-10' id="disqus_thread"></div>

                            <Script>

                                {`  var disqus_config = function () {
    this.page.url = document.location.href;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = document.location.href.split(".com")[1]; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://code-brothers.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();`}
                            </Script>
                        </div>
                    </div>
                    <div id="slider" className={` my-8 h-10 ${latestArticles.length>0?"":"hidden"}  ${isSticky?"sticky":""} top-24`}>
                        <div>
                            <h2 className={`text-xl sm:text-2xl md:text-3xl`}>
                                Latest Articles
                            </h2>
                            <div>
                                {
                                    latestArticles.map((data: any) => {
                                        return <Link id={data.id} href={data.slug}>
                                            <div className="grid grid-cols-[1.2fr_2fr] my-4">
                                                <div>
                                                    <Image width={300} height={300}
                                                           className={`rounded-md h-36 object-cover object-center`}
                                                           src={data.image}
                                                           alt={data.title}/>
                                                </div>
                                                <div className={`mx-2`}>
                                                    <h2 className={`font-medium mb-2 md:text-lg`}>
                                                        {data.title}
                                                    </h2>
                                                    <p>
                                                        {data.description.slice(0, 20)}...
                                                    </p>
                                                    <p className={`text-primaryColor mt-2`}>
                                                        Read More
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={divEle} id={`relatedArticles `} className={`my-40 ${relatedArticles.length>0?"":"hidden"}`}>
                    <h2 className={`text-xl sm:text-2xl md:text-3xl `}>
                        Related Articles
                    </h2>
                    <div className={`grid md:grid-cols-2 my-8`}>
                        {
                            relatedArticles.map((data) => {
                                return <Link className={`mx-4`} href={data.slug} id={data.id}>
                                    <div className="grid md:grid-cols-[1.5fr_2fr]">
                                        <div>
                                            <Image width={600} height={600}
                                                   className={` w-72 h-52 md:w-64 rounded-lg object-center object-cover`}
                                                   src={data.image} alt={data.title}/>
                                        </div>
                                        <div className="mx-4">
                                            <h2 className={`font-medium  mt-2 capitalize sm:text-xl md:text-2xl`}>
                                                {data.title}
                                            </h2>
                                            <p className={`mt-4`}>
                                                {data.description.slice(0, 100)}...
                                            </p>
                                            <p className={`mt-1 text-primaryColor`}>
                                                Read More
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Article;
