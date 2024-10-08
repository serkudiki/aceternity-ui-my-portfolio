/** @type {import('next').NextConfig} */
const nextConfig = {


    silent: true,
    org: "javascript-mastery",
project: "javascript-nextjs",



    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
    // images: {
    //     unoptimized: true,
    //   }
}



export default nextConfig;
