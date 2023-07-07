import {Metadata} from 'next'
import Hero from "@/app/components/Hero";
import WorkSamples from "@/app/components/WorkSamples";
import Team from "@/app/components/Team";
import Services from "@/app/components/Services";
import Testimonial from "@/app/components/Testimonial";
import BlogCard from "@/app/components/BlogCard";
import ContactForm from "@/app/components/ContactForm";

export const metadata: Metadata = {
    title: 'Home',
    description: 'Test',
}
export default async function Home() {
    const timestamp = Date.now().toString();

    const result = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            },
            body: JSON.stringify({
                query: `
        query teamCollectionQuery${timestamp} {
  teamCollection {
    items {
      sys {
        id
      }
     profilepic{
      url
    }
      role
      slug
      username
      github
      facebook
      linkedinn
      bio
    }
  }
}
        `,
            }),
        },
    );
    const serviceResult = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                query: `query productsCollectionQuery${timestamp} {
  productsCollection {
    items {
      sys {
        id
      }
     title
     description
     slug
     featured{
      url
    } 
    }
  }
}`,
            }),
        },
    );
    const workResult = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                query: `query worksamplesCollectionQuery${timestamp} {
  worksamplesCollection {
    items {
      sys {
        id
      }
     projectName
      projectLink
      shortDescription
      featured{url}
    }
  }
}
`,
            }),
        },
    );
    const testimonialResult = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                query: `query testimonialCollectionQuery${timestamp} {
  testimonialCollection {
    items {
      sys {
        id
      }
     customerName
      customerRole
      review
      customerPic{url}
    }
  }
}`,
            }),
        },
    );
    const articleResult = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                query: `query blogCollectionQuery${timestamp} {
  blogCollection(limit:3,skip:0){
    items {
      sys {
        id
      }
     title
     slug
     featured{url}
     categories
     description
      date
    }
  }
}`,
            }),
        },
    );

    if (!result.ok ) {
        console.error(result);
        return {};
    }

    const {data} = await result.json();


    const data2=await serviceResult.json();
    const data3=await workResult.json();
    const data4=await testimonialResult.json();
    const data5=await articleResult.json();
   const service=data2.data.productsCollection.items;
   const work=data3.data.worksamplesCollection.items;
   const testimonial=data4.data.testimonialCollection.items;
   const article=data5.data.blogCollection.items;


    const teams = data.teamCollection.items;

    return (
        <main>
            <Hero/>
            <Team team={teams}/>
            <Services services={service}/>
            <WorkSamples work={work}/>
            <Testimonial customers={testimonial}/>
            <BlogCard article={article}/>
            <ContactForm/>
        </main>
    )
}
