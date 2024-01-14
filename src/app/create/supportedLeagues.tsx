import { PrismaClient } from "@prisma/client"
import { unstable_cache } from "next/cache"
import { SupportedLeagueCard } from "./supportedLeagueCard"

const prisma = new PrismaClient()

export const SupportedLeagues = async () => {
	const cacheGetSupportedLeagues = unstable_cache(
		() =>
			prisma.supportedLeague.findMany({
				orderBy: {
					name: "asc",
				},
			}),
		["GetSupportedLeagues"],
		{
			tags: ["SupportedLeagues"],
			revalidate: 60 * 60 * 24,
		},
	)

	const supportedLeauges = await cacheGetSupportedLeagues()
	return supportedLeauges.map((league) => (
		<SupportedLeagueCard
			key={league.id}
			image={league.logo}
			leagueId={league.id}
			title={league.name}
		/>
	))
}
