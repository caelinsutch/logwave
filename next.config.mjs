import "./src/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "public.blob.vercel-storage.com",
      "res.cloudinary.com",
      "abs.twimg.com",
      "pbs.twimg.com",
      "avatars.githubusercontent.com",
      "www.google.com",
      "illustrations.popsy.co",
    ],
  },
  reactStrictMode: false,
};

export default config;
