import { Button } from "@components/button"
import { Banner } from "./banner"
import { LeagueSelection } from "./leagueSelection"
import { CorrectScoreBonus } from "./correctScoreBonus"
import { MissedDeadlinePolicy } from "./missedDeadlinePolicy"

export const dynamic = "force-dynamic"
export default async function CreatePage() {
  return (
    <div className="h-full flex flex-col">
      <Banner />
      <div className="flex-grow overflow-auto">
        <div className="container pb-8 m-auto">
          <h2 className="py-5 font-semibold">Pool Name</h2>
          <input
            className="border h-8 w-72 indent-2 font-light"
            aria-label="Pool Name"
          />
          <LeagueSelection />
          <div className="flex gap-8">
            <MissedDeadlinePolicy />
            <CorrectScoreBonus />
          </div>
          <Button className="bg-gray-700 text-white my-4">Create</Button>
        </div>
      </div>
    </div>
  )
}
