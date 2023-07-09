import React, {FC} from 'react';
import Image from "next/image"
import Link from "next/link"

type Service = {
    id: string
    title: string
    slug: string
    featured: string
    description: string
}

interface Props {
    services: Service[]
}

const Services: FC<Props> = ({services}) => {
    return (
        <section className="text-gray-600 bg-gray-300 dark:bg-transparent">
            <div className="container px-5 my-8 mx-auto">
                <div className="flex flex-wrap w-full py-24">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Services</h2>
                        <div className="h-1 w-20 bg-primary  rounded"></div>
                    </div>

                </div>
                <div className="flex flex-wrap -m-4">
                    {services.map((service) => {
                        return <div key={service.id} className="xl:w-1/3 md:w-1/2 w-11/12 my-4 p-4 md:mx-0 mx-auto">
                            <Link href={"/services/"+service.slug}>
                                <div
                                    className="rounded-lg bg-white dark:bg-white  ">
                                    <Image width={720} height={400}
                                           className="h-64 rounded-t-lg  w-full object-cover object-center mb-6"
                                           src={service.featured} alt="content"/>
                                    <div className="p-4">
                                        <h2 className="text-lg text-gray-900 font-medium dark:text-black title-font mb-4">{service.title}</h2>
                                        <p className="leading-relaxed dark:text-black text-base">{service.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;