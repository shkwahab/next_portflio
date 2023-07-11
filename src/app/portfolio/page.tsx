import React from 'react';
import WorkSamples from "@/app/components/WorkSamples";
import {FetchData} from "@/app/lib/crud";
import Category from "@/app/components/Category";

const Page=async ()=> {
const res=await FetchData("worksamples")
    const work=res.map((data:any)=>({
        projectName: data.fields.projectName,
        projectLink: data.fields.projectLink,
        shortDescription: data.fields.shortDescription,
        featured: "https:" + data.fields.featured.fields.file.url,
        id: data.sys.id
    }))
    return (
        <>
       <Category title={"Portfolio"} data={work}/>
        </>
    );
}

export default Page;