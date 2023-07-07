import {client} from "@/client";
const FetchDataLimited=async (contentType:string,limit:number)=>{
    const response  = await  client.getEntries({
        content_type:contentType,
        limit:limit
    })
    return response.items;
}
const FetchData=async (contentType:string)=>{
    const response  = await  client.getEntries({
        content_type:contentType,

    })
    return response.items;
}
export {FetchDataLimited,FetchData}