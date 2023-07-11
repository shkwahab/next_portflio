import React, {FC} from 'react';
import Link from "next/link"
import Image from "next/image"
interface Articele{
    title:string
    slug:string
    description:string
    categories:string
    featured:string
    id:string
}
interface Props{
    article:Articele[]
}
const BlogCard:FC<Props> =({article})=> {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-10">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Latest Articles</h2>
                        <div className="h-1 w-20 bg-primary rounded"></div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {article.map((article)=>{
                        return   <Link href={"/blog/"+article.slug} key={article.id} className="p-4 md:w-1/3">
                            <div className="h-full  dark:bg-white border-opacity-60 rounded-lg overflow-hidden">
                                <img  className="lg:h-48 md:h-36 w-full object-cover object-center"
                                     src={article.featured} alt={article.title}/>
                                <div className="p-6 border-[1px]  border-gray-400 border-t-0 rounded-b-lg dark:border-none">
                                    <h3 className="tracking-widest text-xs title-font font-medium dark:text-gray-400 text-gray-400  mb-1">{article.categories}</h3>
                                    <h2 className="title-font text-lg font-medium dark:text-gray-900 text-gray-900 mb-3">{article.title}</h2>
                                    <p className="leading-relaxed dark:text-black mb-3">{article.description.slice(0,100)}...</p>
                                    <div className="flex items-center flex-wrap ">
                                        <div className="text-primaryColor inline-flex items-center md:mb-2 lg:mb-0">Read
                                            More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                                 stroke-width="2" fill="none" stroke-linecap="round"
                                                 stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    })}

                </div>
            </div>
        </section>
    );
}

export default BlogCard;