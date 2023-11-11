import { Suspense } from "react"
import { SupportedLeagues } from "./supportedLeagues"
import { SupportedLeaguesFallback } from "./supportedLeaguesFallback"

export const LeagueSelection = () => {
  return (
    <>
      <h2 className="py-5 font-semibold">Select a league</h2>
      <div className="flex flex-wrap flex-col md:flex-row items-center gap-8">
        <Suspense fallback={<SupportedLeaguesFallback />}>
          <SupportedLeagues />
        </Suspense>
      </div>
    </>
  )
}
