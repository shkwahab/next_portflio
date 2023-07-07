import Hero from "@/app/components/Hero";
import WorkSamples from "@/app/components/WorkSamples";
import Team from "@/app/components/Team";
import Services from "@/app/components/Services";
import Testimonial from "@/app/components/Testimonial";
import BlogCard from "@/app/components/BlogCard";
import ContactForm from "@/app/components/ContactForm";
import environments from "@/app/environments";
import {FetchData, FetchDataLimited} from "@/app/crud";

export default async function Home() {
    const SERVICE_ID = environments.SERVICE_ID;
    const PUBLIC_KEY = environments.PUBLIC_KEY;
    const TEMPLATE_ID = environments.TEMPLATE_ID;
    const billboard = await FetchDataLimited("billboard", 1);
    const team = await FetchData("team");
    const work = await FetchDataLimited("worksamples", 9)
    const billboardData = billboard.map((data: any) => ({
        description: data.fields.description,
        image: "https:" + data.fields.image.fields.file.url,
    }))
    const worksamples = work.map((data: any) => ({
        projectName: data.fields.projectName,
        projectLink: data.fields.projectLink,
        shortDescription: data.fields.shortDescription,
        featured: "https:" + data.fields.featured.fields.file.url,
        id: data.sys.id
    }))
    const service = await FetchData("products")
    const teamData = team.map((data: any) => ({
        username: data.fields.username,
        role: data.fields.role,
        slug: data.fields.slug,
        bio: data.fields.bio,
        linkedin: data.fields.linkedinn,
        github: data.fields.github,
        facebook: data.fields.facebook,
        profilepic: "https:" + data.fields.profilepic.fields.file.url,
        id: data.sys.id,
    }));
    const serviceData = service.map((data: any) => ({
        id: data.sys.id,
        title: data.fields.title,
        slug: data.fields.slug,
        description: data.fields.description,
        featured: "https:" + data.fields.featured.fields.file.url,
    }));
    const testimonial = await FetchData("testimonial")
    const testimonailData = testimonial.map((data: any) => ({
        customerName: data.fields.customerName,
        customerRole: data.fields.customerRole,
        review: data.fields.review,
        customerPic: "https:" + data.fields.customerPic.fields.file.url,
        id: data.sys.id
    }))
    const blog = await FetchDataLimited("blog", 3)

    const blogData = blog.map((data: any) => ({
        title: data.fields.title,
        slug: data.fields.slug,
        categories: data.fields.categories,
        description: data.fields.description,
        featured: "https:" + data.fields.featured.fields.file.url,
        id: data.sys.id
    }))

    return (
        <main>
            <Hero billboard={billboardData[0]}/>
            <Team team={teamData}/>
            <Services services={serviceData}/>
            <WorkSamples work={worksamples}/>
            <Testimonial customers={testimonailData}/>
            <BlogCard article={blogData}/>
            <ContactForm SERVICE_ID={SERVICE_ID} PUBLIC_KEY={PUBLIC_KEY} TEMPLATE_ID={TEMPLATE_ID}/>
        </main>
    )
}
