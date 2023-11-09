import { Suspense } from "react"
import { SupportedLeagues } from "./supportedLeagues"

export const dynamic = "force-dynamic"
export default async function CreatePage() {
  return (
    <div className="container max-w-2xl m-auto py-8 px-2 md:px-0">
      <h1 className="text-2xl font-bold">Create Your Pool</h1>
      <Suspense fallback="Loading...">
        <SupportedLeagues />
      </Suspense>
    </div>
  )
}
