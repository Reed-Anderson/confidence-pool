import { Suspense } from "react"
import { SupportedLeagues } from "./supportedLeagues"
import { SupportedLeaguesFallback } from "./supportedLeaguesFallback"

export const LeagueSelection = () => {
  return (
    <>
      <h2 className="py-5 font-semibold">Select a league</h2>
      <div className="flex flex-wrap gap-8 px-2 md:px-0">
        <Suspense fallback={<SupportedLeaguesFallback />}>
          <SupportedLeagues />
        </Suspense>
      </div>
    </>
  )
}
