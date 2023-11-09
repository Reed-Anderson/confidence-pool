import { Suspense } from "react"
import { SupportedLeagues } from "./supportedLeagues"
import { SupportedLeaguesFallback } from "./supportedLeaguesFallback"

export const dynamic = "force-dynamic"
export default async function CreatePage() {
  return (
    <div className="container max-w-2xl m-auto py-8 px-2 md:px-0">
      <h1 className="text-2xl font-bold">Create Your Pool</h1>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        <Suspense fallback={<SupportedLeaguesFallback />}>
          <SupportedLeagues />
        </Suspense>
      </div>
    </div>
  )
}
