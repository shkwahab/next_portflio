"use client"
import React, {FC,useState} from 'react';
import Image from "next/image"
import Link from "next/link"


type WorkSample = {
    projectName: string,
    projectLink: string,
    shortDescription: string,
    featured:string
    id:string

}

interface Props {
    work: WorkSample[]
}

const WorkSamples: FC<Props> = ({work}) => {
    const [imgZoom,SetZoom]=useState<Boolean>(false)
    const Zoom=()=>{
        SetZoom(true)
    }
    const UnZoom=()=>{
        SetZoom(false)
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 my-8 mx-auto">
                <div className="flex flex-wrap w-full py-24">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Latest
                            Works</h2>
                        <div className="h-1 w-20 bg-primary  rounded"></div>
                    </div>

                </div>
                <div className="flex flex-wrap -m-4">
                    {work.map((worksamples) => {
                        return (
                            <div
                                key={worksamples.id}
                                className="xl:w-1/3 md:w-1/2 w-11/12 my-4 p-4 md:mx-0 mx-auto"
                            >
                                <Link target={"_blank"} href={worksamples.projectLink}>
                                    <div className="rounded-lg relative dark:bg-white">
                                        <div className="h-80 rounded-lg overflow-hidden">
                                            <Image
                                                width={720}
                                                height={400}
                                                className={`${imgZoom?"scale-125 object-cover":""} transition-all duration-500 `}
                                                src={worksamples.featured}
                                                alt="content"
                                            />
                                            <div onMouseEnter={Zoom} onMouseLeave={UnZoom}  className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 flex flex-col items-center justify-center transition-opacity duration-300 hover:opacity-100 focus:opacity-100">
                                                <h2 className="text-lg text-white font-bold mb-4">
                                                    {worksamples.projectName}
                                                </h2>
                                                <p className="text-base text-white">
                                                    {worksamples.shortDescription}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>



            </div>
        </section>
    );
}

export default WorkSamples;