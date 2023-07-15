import React from 'react';
import TmpComponents from "@/app/components/TmpComponents";

// const contentful = require('contentful')

const Page = async () => {
    // const client = contentful.createClient({
    //     space: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
    // });
    // const components = async () => {
    //     const response = await client.getEntries({
    //         content_type: "templates",
    //         'fields.category': "components",
    //     });
    //     return response.items;
    // };
    // const data = await components();
    const data=[
        {
        id:1,
        title:"Navs",
        slug:"navs",
        image: <svg
            className="w-full   text-gray-700 transition-all duration-200 opacity-25 group-hover:text-gray-800"
            viewBox="0 0 300 156">
            <circle cx="16" cy="17" r="6" fill="currentColor"></circle>
            <rect opacity="0.6" x="234" y="15" width="20" height="4" rx="2"
                  fill="currentColor"></rect>
            <rect opacity="0.6" x="207" y="15" width="20" height="4" rx="2"
                  fill="currentColor"></rect>
            <rect opacity="0.6" x="179" y="15" width="20" height="4" rx="2"
                  fill="currentColor"></rect>
            <rect opacity="0.6" x="152" y="15" width="20" height="4" rx="2"
                  fill="currentColor"></rect>
            <rect x="261" y="12" width="29" height="10" rx="2" fill="currentColor"></rect>
            <line x1="10" y1="30.5" x2="290" y2="30.5" opacity="0.4" stroke="currentColor"></line>
        </svg>
    },
    //     {
    //     id:2,
    //     title:"Headers",
    //     slug:"headers",
    //     image: <svg className="w-full text-gray-classNameransition-all duration-200 opacity-25 group-hover:text-gray-800"
    //                 viewBox="0 0 300 156">
    //         <circle cx="149" cy="42" r="7" fill="currentColor"></circle>
    //         <rect x="96" y="59" width="108" height="5" rx="2.5" fill="currentColor"></rect>
    //         <path
    //             d="M113 71.5C113 70.1193 114.119 69 115.5 69H185.5C186.881 69 188 70.1193 188 71.5V71.5C188 72.8807 186.881 74 185.5 74H115.5C114.119 74 113 72.8807 113 71.5V71.5Z"
    //             fill="currentColor"></path>
    //         <rect opacity="0.6" x="71" y="84" width="157" height="5" rx="2.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="78" y="94" width="143" height="5" rx="2.5" fill="currentColor"></rect>
    //         <rect x="129" y="109" width="40" height="14" rx="2" fill="currentColor"></rect>
    //     </svg>
    // },
    //     {
    //     id:3,
    //     title:"Footers",
    //     slug:"footers",
    //     image: <svg className="w-full text-gray-classNameransition-all duration-200 opacity-25 group-hover:text-gray-800"
    //                 viewBox="0 0 300 156">
    //         <path
    //             d="M23 86.5C23 85.1193 24.1193 84 25.5 84H65.5C66.8807 84 68 85.1193 68 86.5V86.5C68 87.8807 66.8807 89 65.5 89H25.5C24.1193 89 23 87.8807 23 86.5V86.5Z"
    //             fill="currentColor"></path>
    //         <rect opacity="0.6" x="23" y="96" width="63" height="3" rx="1.5" fill="currentColor"></rect>
    //         <path
    //             d="M117 85.5C117 84.6716 117.672 84 118.5 84H135.5C136.328 84 137 84.6716 137 85.5V85.5C137 86.3284 136.328 87 135.5 87H118.5C117.672 87 117 86.3284 117 85.5V85.5Z"
    //             fill="currentColor"></path>
    //         <rect opacity="0.6" x="117" y="94" width="29" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="117" y="104" width="25.071" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="117" y="114" width="28.529" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="117" y="124" width="24" height="3" rx="1.5" fill="currentColor"></rect>
    //         <path
    //             d="M246 85.5C246 84.6716 246.672 84 247.5 84H264.5C265.328 84 266 84.6716 266 85.5V85.5C266 86.3284 265.328 87 264.5 87H247.5C246.672 87 246 86.3284 246 85.5V85.5Z"
    //             fill="currentColor"></path>
    //         <rect opacity="0.6" x="246" y="94" width="29" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="246" y="104" width="25.071" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="246" y="114" width="28.529" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="246" y="124" width="31" height="3" rx="1.5" fill="currentColor"></rect>
    //         <path
    //             d="M160 85.5C160 84.6716 160.672 84 161.5 84H176.5C177.328 84 178 84.6716 178 85.5V85.5C178 86.3284 177.328 87 176.5 87H161.5C160.672 87 160 86.3284 160 85.5V85.5Z"
    //             fill="currentColor"></path>
    //         <rect opacity="0.6" x="160" y="94" width="24" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="160" y="104" width="25.071" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="160" y="114" width="28.529" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="160" y="124" width="31" height="3" rx="1.5" fill="currentColor"></rect>
    //         <path
    //             d="M203 85.5C203 84.6716 203.672 84 204.5 84H225.5C226.328 84 227 84.6716 227 85.5V85.5C227 86.3284 226.328 87 225.5 87H204.5C203.672 87 203 86.3284 203 85.5V85.5Z"
    //             fill="currentColor"></path>
    //         <rect opacity="0.6" x="203" y="94" width="25" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="203" y="104" width="28" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="203" y="114" width="23" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="203" y="124" width="28" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="23" y="106" width="57" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="23" y="116" width="45" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="23" y="141" width="33" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="269" y="141" width="8" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="254" y="141" width="8" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="239" y="141" width="8" height="3" rx="1.5" fill="currentColor"></rect>
    //         <rect opacity="0.6" x="224" y="141" width="8" height="3" rx="1.5" fill="currentColor"></rect>
    //         <circle cx="29" cy="71" r="6" fill="currentColor"></circle>
    //         <line opacity="0.4" y1="55.5" x2="300" y2="55.5" stroke="currentColor"></line>
    //     </svg>
    // },
    ]

    return (
      <TmpComponents components={data}/>
    );
}

export default Page;