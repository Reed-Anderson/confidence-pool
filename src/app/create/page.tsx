import { Banner } from "@components/banner"
import { useSignInRequired } from "@src/lib/useSignInRequired"
import { CorrectScoreBonus } from "./correctScoreBonus"
import { LeagueSelection } from "./leagueSelection"
import { MissedDeadlinePolicy } from "./missedDeadlinePolicy"
import { PoolName } from "./poolName"
import { SubmitButton } from "./submitButton"

export const dynamic = "force-dynamic"
export default async function CreatePage() {
	await useSignInRequired()
	return (
		<>
			<Banner title="Create Your Pool" />
			<div className="container p-8 gap-4 flex flex-col items-start m-auto">
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
