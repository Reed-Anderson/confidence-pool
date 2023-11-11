import { Button } from "@components/button"
import { Banner } from "./banner"
import { LeagueSelection } from "./leagueSelection"
import { CorrectScoreBonus } from "./correctScoreBonus"
import { MissedDeadlinePolicy } from "./missedDeadlinePolicy"

export const dynamic = "force-dynamic"
export default async function CreatePage() {
  return (
    <>
      <Banner />
      <div className="container pb-8 m-auto px-4 md:px-0">
        <h2 className="py-5 font-semibold">Pool Name</h2>
        <input
          className="border h-8 w-72 indent-2 font-light"
          aria-label="Pool Name"
        />
        <LeagueSelection />
        <div className="flex gap-8 flex-col md:flex-row">
          <MissedDeadlinePolicy />
          <CorrectScoreBonus />
        </div>
        <Button className="bg-gray-700 text-white my-4 w-full md:w-auto">
          Create
        </Button>
      </div>
    </>
  )
}
