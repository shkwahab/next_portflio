import React, {FC} from 'react';
import ServicePage from '@/app/components/ServicePage';

const contentful = require('contentful');

interface Props {
    params: any;
}

const Page: FC<Props> = async ({params}) => {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
    });
    const FetchData = async (contentType: string) => {
        const response = await client.getEntries({
            content_type: contentType,
            'fields.slug': params["slug.tsx"][0]
        });
        return response.items[0];
    }

    const data = await FetchData('products');

    const service={
        title:data.fields.title,
        description:data.fields.description,
        price:data.fields.price ,
        image:data.fields.featured.fields.file.url,
        purchase:data.fields.cart,
    }
    return (
        <>
            <ServicePage service={service}/>
        </>
    );
};

export default Page;


