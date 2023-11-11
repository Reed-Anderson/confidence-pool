"use client"
import { useCreateStore } from "./create.store"
import { RadioOption } from "./radioOption"

export const CorrectScoreBonus = () => {
  const correctScoreBonus = useCreateStore((state) => state.correctScoreBonus)
  const setCorrectScoreBonus = useCreateStore(
    (state) => state.setCorrectScoreBonus,
  )
  return (
    <div className="flex-grow max-w-xl">
      <h2 className="py-5 font-semibold">Correct Score Bonus</h2>
      <div className="flex flex-col gap-4">
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
    </div>
  )
}
