"use client"
import SectionHeader from "@components/sectionHeader"
import { useCreateStore } from "./create.store"
import { RadioOption } from "./radioOption"

export const CorrectScoreBonus = () => {
	const correctScoreBonus = useCreateStore((state) => state.correctScoreBonus)
	const setCorrectScoreBonus = useCreateStore(
		(state) => state.setCorrectScoreBonus
	)
	return (
		<section className="flex-grow max-w-xl">
			<SectionHeader title="Correct Score Bonus" />
			<div className="flex flex-col gap-2">
				<RadioOption
					description="Players can score double points for correctly predicting the score in addition to the correct outcome."
					groupName="scoreBonus"
					htmlId="double"
					selectedValue={correctScoreBonus}
					setValue={setCorrectScoreBonus}
					text="Double Points"
				/>
				<RadioOption
					description="Players will not be given the opportunity to predict scores for bonus points."
					groupName="scoreBonus"
					htmlId="noBonus"
					selectedValue={correctScoreBonus}
					setValue={setCorrectScoreBonus}
					text="No Bonus"
				/>
			</div>
		</section>
	)
}
