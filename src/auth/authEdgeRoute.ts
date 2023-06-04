import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

import { env } from "~/env.mjs"
import { setAuth } from "./jwt"
import getCredentialsFromCode from "./getCredentialsFromCode"

const profileSchema = z.object({
	email: z.string().email(),
	name: z.string(),
	photo: z.string().url().optional(),
})

export const oauthCallbackHandler = async (request: NextRequest) => {
	const { searchParams } = new URL(request.url)

	const code = searchParams.get("code")

	if (typeof code !== "string") return new NextResponse(null, { status: 400 })

	const { accessToken } = await getCredentialsFromCode(code)

	const { emailAddresses, names, photos } = (await (
		await fetch(
			"https://people.googleapis.com/v1/people/me?personFields=emailAddresses,names,photos",
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)
	).json()) as {
		emailAddresses?: { value: string }[]
		names?: { displayName: string }[]
		photos?: { url: string }[]
	}

	const { email, name, photo } = profileSchema.parse({
		email: emailAddresses?.[0]?.value,
		name: names?.[0]?.displayName,
		photo: photos?.[0]?.url,
	})

	const response = NextResponse.redirect(new URL(`${env.NEXT_PUBLIC_URL}/home`))

	await setAuth({
		cookies: response.cookies,
		auth: {
			email,
			name,
			photo,
		},
	})

	return response
}
