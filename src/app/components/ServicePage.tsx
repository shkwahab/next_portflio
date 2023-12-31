"use client"
import Link from 'next/link';
import React, { FC ,useState} from 'react';
import {RxCross1} from "react-icons/rx"
type Service = {
    title: string;
    image: string;
    description: string;
    price: number;
    purchase: string;
};

interface Props {
    service: Service;
}

const ServicePage: FC<Props> = ({ service }) => {
    const [isPurchaseClicked, setIsPurchaseClicked] = useState(false);
const closed=()=>{
    setIsPurchaseClicked(false)
}
    const handlePurchase = () => {
        setIsPurchaseClicked(true);

    };
    return (
        <section id="service-page" className="container relative">
            <div className="flex flex-wrap w-full p-8 sm:p-16 pb-4 sm:pb-6 md:pb-8 md:p-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{service.title}</h1>
                    <div className="h-1 w-20 bg-primary rounded"></div>
                </div>
            </div>

            <section className={`text-gray-600 body-font overflow-hidden ${isPurchaseClicked?"hidden":""}`}>
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce"
                             className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                             src={service.image}/>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{service.title}</h1>

                            <p className="my-4 leading-relaxed">{service.description}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Technology</span>
                                    <div className="relative">
                                        <select
                                            className="dark:text-white dark:bg-blue-900 rounded border border-gray-300 appearance-none py-2 focus:outline-none  pl-3 pr-10">
                                            <option className={`dark:text-white`}>Next.Js</option>
                                            <option className={`dark:text-white`}>React.Js</option>
                                            <option className={`dark:text-white`}>Html</option>
                                            <option className={`dark:text-white`}>Wordpress</option>
                                        </select>

                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                {/* <span className="title-font font-medium text-2xl text-gray-900">${service.price}</span> */}
                                {/* <button onClick={handlePurchase}
                                        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy
                                    Now
                                </button> */}
                                <Link href={`/#contact`}
                                        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Contact Us
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <div className={`relative ${isPurchaseClicked ? "mb-8" : "hidden"}`}>
                    <button onClick={closed}>
                    <RxCross1  className="absolute -top-10 cursor-pointer right-[25px] md:right-20 text-3xl" />
                    </button>
                    <iframe className={`w-10/12 mx-auto h-[1080px] md:h-[850px]`}  sandbox="allow-scripts allow-same-origin" src={service.purchase}></iframe>
                </div>
        </section>
    );
};

export default ServicePage;