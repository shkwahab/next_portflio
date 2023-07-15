import React from 'react';
import Link from "next/link";

const Page = () => {
    const data: any = [
        //     {
        //     id:1,
        //     slug:"tailwind-config",
        //     title:"Tailwind Config",
        //     description:"Custom color palette, fonts, spacings, variants, and others.",
        //     featured:"https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
        // },
        {
            id: 2,
            slug: "component",
            title: "Components",
            description: "Explore the component and simply copy the source code.",
            featured: "https://blog.logrocket.com/wp-content/uploads/2023/06/how-to-create-custom-toast-component-react.png"
        },
        // {
        //     id: 3,
        //     slug: "themes",
        //     title: "Themes",
        //     description: "Explore the collection of useful web pages and simply code the source code.",
        //     featured: "https://s3.amazonaws.com/creativetim_bucket/products/347/thumb/opt_adp_nextjs_thumbnail.jpg"
        // },

    ]
    return (
        <section id={`themes`} className={`m-10`}>
            <div className="flex flex-wrap w-full ">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Templates</h1>
                    <div className="h-1 w-20 bg-primary rounded"></div>
                </div>
            </div>

            <div className="flex flex-wrap my-10">
                {data.map((item: any) => {
                    return <Link href={"/themes/" + item.slug} key={item.id} className="p-4 md:w-1/3">
                        <div className="h-full  dark:bg-white border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36  w-full object-cover object-center"
                                 src={item.featured} alt={item.title}/>
                            <div className="p-6 border-[1px]  border-gray-400 border-t-0 rounded-b-lg dark:border-none">
                                <h2 className="title-font text-lg font-medium dark:text-gray-900 text-gray-900 mb-3">{item.title}</h2>
                                <p className="leading-relaxed dark:text-black">{item.description}</p>

                            </div>
                        </div>
                    </Link>
                })}

            </div>

        </section>
    );
}

export default Page;