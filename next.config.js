/** @type {import('next').NextConfig} */
const path = require('path');
const dotenv = require('dotenv');

const env = dotenv.config({
    path: path.resolve(process.cwd(), 'src/.env'),
});
const nextConfig = {
    env: env.parsed
    ,
    images:{
        domains:["dummyimage.com","images.ctfassets.net"],
        deviceSizes: [320, 420, 768, 1024, 1200],
    },

}

module.exports = nextConfig
