import React, {FC} from 'react';
import Link from "next/link";

type Component = {
    id: number
    title: string
    slug: string
    image: any
}

interface Props {
    components: Component[]
}

const TmpComponents: FC<Props> = ({components}) => {
    return (
        <section id={`components`}>
            <div className="flex flex-wrap  m-10">
                <div className="">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Components</h2>
                    <div className="h-1 w-20 bg-primary rounded"></div>
                </div>
                </div>
            <div className="flex flex-wrap m-10 ">
                {components.map((item) => {
                    return <Link href={"/themes/component/" + item.slug} key={item.id} className=" p-4 md:w-1/3">
                        <div className=" rounded-lg dark:bg-white overflow-hidden">
                            <div className={`border rounded-t-2xl  border-gray-300`}>
                            {item.image}
                            </div>
                            <div className="p-6 flex justify-between border rounded-b-2xl  border-gray-300">
                                <h2 className="title-font text-lg sm:text-xl md:text-2xl text-gray-600 font-medium dark:text-gray-900  ">{item.title}</h2>
                                <p className={`text-lg sm:text-xl md:text-2xl dark:text-gray-900 text-gray-600`}>{`>`}</p>
                            </div>
                        </div>
                    </Link>
                })}
            </div>
        </section>
    );
}

export default TmpComponents;