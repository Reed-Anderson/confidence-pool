import { TileContainer } from "@components/tileContainer"
import { Suspense } from "react"
import { SupportedLeagues } from "./supportedLeagues"
import { SupportedLeaguesFallback } from "./supportedLeaguesFallback"
import SectionHeader from "@components/sectionHeader"

export const LeagueSelection = () => {
	return (
		<section>
			<SectionHeader title="Select a League" />
			<TileContainer>
				<Suspense fallback={<SupportedLeaguesFallback />}>
					<SupportedLeagues />
				</Suspense>
			</TileContainer>
		</section>
	)
}
