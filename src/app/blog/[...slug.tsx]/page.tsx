import React, { FC } from 'react';
import { notFound } from 'next/navigation';
import { client } from '@/app/lib/client';
import Article from '@/app/components/Article';

interface Props {
    params: any;
}

const Page: FC<Props> = async ({ params }) => {
    const slug = params['slug.tsx'][0];

    const FetchData = async (contentType: string) => {
        const response = await client.getEntries({
            content_type: contentType,
            'fields.slug': slug,
        });
        return response.items[0];
    };

    const data = await FetchData('blog');
    if (!data) {
        notFound();
    }

    const article = {
        slug:data.fields.slug,
        title: data.fields.title,
        description: data.fields.description,
        image: 'https:' + data.fields.featured.fields.file.url,
        date: data.fields.date,
        category: data.fields.categories,
        article: data.fields.article,
    };

    const FetchDataLimited = async (contentType: string, limit: number) => {
        const response = await client.getEntries({
            content_type: contentType,
            limit: limit,
            'fields.slug[ne]': article.slug,
        });
        return response.items;
    };
 const FetchDataLimitedbyCategory = async (contentType: string, limit: number) => {
        const response = await client.getEntries({
            content_type: contentType,
            limit: limit,
            'fields.slug[ne]': article.slug,
            'fields.categories': article.category,
        });
        return response.items;
    };

    const res2 = await FetchDataLimited('blog', 6);
    const res3= await  FetchDataLimitedbyCategory('blog',6)
    const relatedArticles=res3.map((data:any)=>({
        title: data.fields.title,
        description: data.fields.description,
        slug:data.fields.slug,
        image: 'https:' + data.fields.featured.fields.file.url,

    }))
    const latestArticles = res2.map((data: any) => ({
        id: data.sys.id,
        title: data.fields.title,
        description: data.fields.description,
        image: 'https:' + data.fields.featured.fields.file.url,
        slug: data.fields.slug,
    }));


    return <Article relatedArticles={relatedArticles} article={article} latestArticles={latestArticles} />;
};

export default Page;
