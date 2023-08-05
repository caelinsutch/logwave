import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NEXTAUTH_URL: z.string().url(),
    NEXT_PUBLIC_ROOT_DOMAIN: z.string().min(1),
    POSTGRES_PRISMA_URL: z.string().min(1),
    POSTGRES_URL_NON_POOLING: z.string().min(1),
    NEXTAUTH_SECRET: z.string().min(1),
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
    AUTH_BEARER_TOKEN: z.string().min(1),
    PROJECT_ID_VERCEL: z.string().min(1),
    TEAM_ID_VERCEL: z.string().min(1),
    OPENAI_API_KEY: z.string().min(1),
  },
  client: {
    NEXTAUTH_URL: z.string().url(),
    NEXT_PUBLIC_ROOT_DOMAIN: z.string().min(1),
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_PUBLIC_ROOT_DOMAIN: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
  }
});