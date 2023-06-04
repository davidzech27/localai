import Link from "next/link"

import authenticationURL from "~/auth/authenticationURL"

const Home = () => {
	return (
		<main
			style={{
				backgroundPosition: "calc(100% - 0px) calc(100% - 92px)",
				backgroundRepeat: "no-repeat",
			}}
			className="flex h-screen flex-col items-center justify-center bg-gradient-radial from-[#2f3ab955] to-transparent to-60% p-24"
		>
			<div className="flex flex-col justify-between space-y-12 text-center">
				<div className="text-7xl font-bold tracking-tight">Re-engage your readers</div>

				<p className="mx-auto w-2/3 text-xl font-medium opacity-70">
					We make it easy for your readers to find and digest interesting and relevant
					content in your newspapers
				</p>

				<Link href={authenticationURL}>
					<button className="mx-auto h-16 w-64 rounded-lg border-[1.5px] border-white text-2xl font-medium opacity-80 transition hover:opacity-100">
						Demo
					</button>
				</Link>
			</div>
		</main>
	)
}
// problem
// local news is losing popularity
// people are turning to social media and major news outlets for their news for greater convenience (short-form content)
// people are disconnecting with their community
// especially younger audiences (so it will only get worse)
// our solution
// revitalize your content, re-engage your readers
// our platform makes your content AI-searchable to make it easier for your readers to find and digest interesting and relevant content
// could make staying up-to-date with local and world events significantly more convenient and engaging
// we don't want to replace journalists, we want to take what they create and make it easier for your readers to find and digest
// reconnect with your community

export default Home
