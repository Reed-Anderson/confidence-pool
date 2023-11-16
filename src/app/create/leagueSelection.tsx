import { Suspense } from "react"
import { SupportedLeagues } from "./supportedLeagues"
import { SupportedLeaguesFallback } from "./supportedLeaguesFallback"

export const LeagueSelection = () => {
  return (
    <>
      <h2 className="pt-3 pb-1 font-semibold text-sm">Select a league</h2>
      <div className="flex flex-wrap flex-col pb-4 md:flex-row items-center gap-8">
        <Suspense fallback={<SupportedLeaguesFallback />}>
          <SupportedLeagues />
        </Suspense>
      </div>
    </>
  )
}
