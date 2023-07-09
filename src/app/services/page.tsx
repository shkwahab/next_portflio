    import React from 'react';
    import {FetchData} from "@/app/lib/crud";
    import Category from "@/app/components/Category";
    const Page=async ()=> {
        const res=await FetchData("products");
        const data=res.map((data:any)=>({
            title:data.fields.title,
            image:"https:"+data.fields.featured.fields.file.url,
            description:data.fields.description,
            slug:data.fields.slug,
            id:data.sys.id
        }))

         return (
           <Category title={"services"} data={data}/>
        );
    }

    export default Page;