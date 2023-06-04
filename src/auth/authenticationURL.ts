import redirectURL from "./redirectURL"
import { env } from "~/env.mjs"

const authenticationURL = encodeURI(
	`https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&prompt=consent&include_granted_scopes=true&response_type=code&client_id=${env.GOOGLE_CLIENT_ID}&redirect_uri=${redirectURL}`
)

export default authenticationURL
