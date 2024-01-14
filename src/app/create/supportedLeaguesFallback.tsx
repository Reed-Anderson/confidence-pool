import { SupportedLeagueCard } from "./supportedLeagueCard"

export const SupportedLeaguesFallback = () => {
	const arr = [1, 2, 3]
	return arr.map((val) => <SupportedLeagueCard key={val} />)
}
