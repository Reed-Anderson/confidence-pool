import { LeagueSelection } from "./leagueSelection"
import { CorrectScoreBonus } from "./correctScoreBonus"
import { MissedDeadlinePolicy } from "./missedDeadlinePolicy"
import { PoolName } from "./poolName"
import { SubmitButton } from "./submitButton"
import { Banner } from "@components/banner"

export const dynamic = "force-dynamic"
export default async function CreatePage() {
  return (
    <>
      <Banner title="Create Your Pool" />
      <div className="container pb-8 pt-6 m-auto px-4 md:px-0">
        <PoolName />
        <LeagueSelection />
        <div className="flex gap-8 flex-col md:flex-row">
          <MissedDeadlinePolicy />
          <CorrectScoreBonus />
        </div>
        <SubmitButton />
      </div>
    </>
  )
}
