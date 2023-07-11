/** @type {import('next').NextConfig} */



const nextConfig = {

    images:{
        domains:["dummyimage.com","images.ctfassets.net"],
        deviceSizes: [320, 420, 768, 1024, 1200],
    },
    videos:{
        domains:["videos.ctfassets.net"]
    }

}

module.exports = nextConfig
