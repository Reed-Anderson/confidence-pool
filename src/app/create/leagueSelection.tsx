import { Suspense } from "react"
import { SupportedLeagues } from "./supportedLeagues"
import { SupportedLeaguesFallback } from "./supportedLeaguesFallback"
import { TileContainer } from "@components/tileContainer"

export const LeagueSelection = () => {
  return (
    <>
      <h2 className="pt-3 pb-1 font-semibold text-sm">Select a league</h2>
      <TileContainer>
        <Suspense fallback={<SupportedLeaguesFallback />}>
          <SupportedLeagues />
        </Suspense>
      </TileContainer>
    </>
  )
}
