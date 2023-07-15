import React from 'react';
import CompCode from "@/app/components/CompCode";
const contentful = require('contentful')

const Page=async ()=> {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
    });
    const components = async () => {
        const response = await client.getEntries({
            content_type: "templates",
            'fields.category': "components",
            'fields.subcategory': "Navs"
        });
        return response.items;
    };
    const data = await components();
    const nav=data.map((item:any)=>({
        id:item.sys.id,
        code:item.fields.code.fields.code,
        codetype:item.fields.code.fields.codetype,
        image:"https:"+item.fields.image.fields.file.url
    }))

    return (
        <CompCode Navbar={nav}/>
    );
}

export default Page;