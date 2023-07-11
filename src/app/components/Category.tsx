"use client"
import React, {FC,useState} from 'react';
import Link from 'next/link';
import Image from "next/image";

type data={
    title?:string
    image?:string
    description?:string
    slug?:string
    category?:string
    id?:string
    projectName?:string
    projectLink?:string
    shortDescription?:string
    featured?:string
}
interface Props{
    title:string
    data:data[]
}
const Category:FC<Props> =({title,data}) =>{
    const itemsPerPage = 6;
    const totalPosts = data.length;
    const totalPages = Math.ceil(totalPosts / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const [imgZoom, setZoom] = useState<boolean[]>(Array(data.length).fill(false));

    const handleZoom = (index: number) => {
        const zoomState = [...imgZoom];
        zoomState[index] = !zoomState[index];
        setZoom(zoomState);
    };
    const handlePageClick = (page:any) => {
        setCurrentPage(page);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);
    const renderPagination = () => {
        const paginationItems = [];
        const maxVisiblePages = 5;
        const middlePage = Math.floor(maxVisiblePages / 2);
        let startPage = currentPage - middlePage;
        let endPage = currentPage + middlePage;

        if (startPage < 0) {
            endPage += Math.abs(startPage);
            startPage = 0;
        }

        if (endPage >= totalPages) {
            startPage -= endPage - (totalPages - 1);
            endPage = totalPages - 1;
        }

        paginationItems.push(
            <button
                key="previous"
                onClick={() => handlePageClick(currentPage - 1)}
                className={`mx-1 ${
                    currentPage === 0 ? 'bg-gray-200 text-primaryColor' : 'bg-primary text-white'
                } py-2 px-3 sm:py-4 sm:px-6  focus:outline-none text-lg sm:text-xl`}
                disabled={currentPage === 0}
            >
                Previous
            </button>
        );

        for (let i = startPage; i <= endPage; i++) {
            if (i >= 0) {
                paginationItems.push(
                    <button
                        key={i}
                        onClick={() => handlePageClick(i)}
                        className={`mx-1 ${
                            currentPage === i ? 'bg-primary text-white' : 'bg-gray-200 text-primaryColor'
                        } py-2 px-3 sm:py-4 sm:px-6  focus:outline-none text-lg sm:text-xl`}
                    >
                        {i + 1}
                    </button>
                );
            }
        }

        paginationItems.push(
            <button
                key="next"
                onClick={() => handlePageClick(currentPage + 1)}
                className={`mx-1 ${
                    currentPage === totalPages - 1 ? 'bg-gray-200 text-primaryColor' : 'bg-primary text-white'
                } py-2 px-3 sm:py-4 sm:px-6  focus:outline-none text-lg sm:text-xl`}
                disabled={currentPage === totalPages - 1}
            >
                Next
            </button>
        );

        return paginationItems;
    };


    return (
       <>
           <div className="mx-4 my-10">
               <div className="flex flex-wrap w-full mb-10">
                   <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                       <h2 className="capitalize sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{title}</h2>
                       <div className="h-1 w-20 bg-primary rounded"></div>
                   </div>
               </div>
               <div className={`my-4 grid md:grid-cols-3 ${title==="Portfolio"?"hidden":""}`}>
                   {currentItems.map((post) => (
                       <div key={post.id}>
                           <Link href={"/"+title+"/"+post.slug}>
                               <div className="my-4 sm:my-6 md:my-8 mx-4 h-auto border-gray-400 border overflow-hidden">
                                   <img
                                       className=" h-[280px] w-full object-cover object-center"
                                       src={post.image}
                                       alt={post.title}
                                   />
                                   <div>

                                   </div>
                                   <div className="p-6 ">
                                       <h2 className={`tracking-widest uppercase text-sm text-gray-500 title-font font-medium mb-1 ${post.title?"block":"hidden"}`}>
                                           {post.category}
                                       </h2>
                                       <h2 className=" text-lg sm:text-xl md:text-2xl font-medium mb-3">{post.title}</h2>
                                       <p className="leading-relaxed mb-3">{post.description}</p>
                                   </div>
                               </div>
                           </Link>
                       </div>
                   ))}
               </div>

               <div className={`my-4 grid md:grid-cols-3 ${title==="Portfolio"?"":"hidden"}`}>
                   {currentItems.map((worksamples,index)=>{
                       return (
                           <div
                               key={worksamples.id}
                               className=" my-4 p-4 md:mx-0 mx-auto"
                           >
                               <Link target="_blank" href={worksamples.projectLink||""}>
                                   <div className="rounded-lg relative dark:bg-white">
                                       <div className="h-80 rounded-lg overflow-hidden">
                                           <Image
                                               width={720}
                                               height={400}
                                               className={`${imgZoom[index] ? 'scale-125 object-cover' : ''} transition-all duration-500`}
                                               src={worksamples.featured || ""}
                                               alt="content"
                                           />
                                           <div
                                               onMouseEnter={() => handleZoom(index)}
                                               onMouseLeave={() => handleZoom(index)}
                                               className="absolute inset-0 bg-black bg-opacity-30 rounded-lg opacity-0 flex flex-col items-center justify-center transition-opacity duration-300 hover:opacity-100 focus:opacity-100"
                                           >
                                               <h2 className="text-lg text-white font-bold mb-4">
                                                   {worksamples.projectName}
                                               </h2>
                                               <p className="text-base p-2 text-white">
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

               <div className="flex justify-center mt-4">
                   {renderPagination()}
               </div>
           </div>
       </>
    );
}

export default Category;