import { z } from "zod"
import { createEnv } from "@t3-oss/env-nextjs"

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(["development", "test", "production"]),
		OPENAI_SECRET_KEY: z.string(),
		QDRANT_URL: z.string().url(),
		QDRANT_API_KEY: z.string(),
		JWT_SECRET: z.string(),
		GOOGLE_CLIENT_ID: z.string(),
		GOOGLE_CLIENT_SECRET: z.string(),
	},
	client: {
		NEXT_PUBLIC_URL: z.string().url(),
		NEXT_PUBLIC_CONTACT_EMAIL: z.string().email(),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		OPENAI_SECRET_KEY: process.env.OPENAI_SECRET_KEY,
		QDRANT_URL: process.env.QDRANT_URL,
		QDRANT_API_KEY: process.env.QDRANT_API_KEY,
		JWT_SECRET: process.env.JWT_SECRET,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
		NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
	},
})
