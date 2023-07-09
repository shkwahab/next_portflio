import React from 'react';
import {FetchData} from "@/app/lib/crud";
import Category from "@/app/components/Category";

const Page=async ()=> {
 const res=await FetchData("blog")
    const data=res.map((data:any)=>({
        title:data.fields.title,
        slug:data.fields.slug,
        description:data.fields.description,
        id:data.sys.id,
        category:data.fields.categories,
        image:"https:"+data.fields.featured.fields.file.url,
    }))
    return (
        <Category title={"blog"} data={data}/>
    );
}

export default Page;