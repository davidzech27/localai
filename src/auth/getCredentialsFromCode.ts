import { z } from "zod"

import redirectURL from "./redirectURL"
import { env } from "~/env.mjs"

const tokensSchema = z.object({
	accessToken: z.string(),
	refreshToken: z.string(),
})

const getCredentialsFromCode = async (code: string) => {
	const tokens = (await (
		await fetch("https://accounts.google.com/o/oauth2/token", {
			method: "POST",
			body: JSON.stringify({
				client_id: env.GOOGLE_CLIENT_ID,
				client_secret: env.GOOGLE_CLIENT_SECRET,
				redirect_uri: redirectURL,
				code,
				grant_type: "authorization_code",
			}),
		})
	).json()) as
		| {
				access_token: unknown
				refresh_token: unknown
		  }
		| undefined

	if (tokens === undefined) throw new Error("No Google tokens")

	return tokensSchema.parse({
		accessToken: tokens.access_token,
		refreshToken: tokens.refresh_token,
	})
}

export default getCredentialsFromCode
