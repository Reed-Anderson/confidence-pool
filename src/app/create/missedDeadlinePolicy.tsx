import { RadioOption } from "./radioOption"

export const MissedDeadlinePolicy = () => {
  return (
    <div className="flex-grow max-w-xl">
      <h2 className="py-5 font-semibold">Missed Deadline Policy</h2>
      <div className="flex flex-col gap-4">
        <RadioOption
          description="Players are granted a Grace Week on their first deadline miss, during which their score will be the average of those who submitted picks. Subsequent misses will be subject to the Low Score policy."
          groupName="missingPolicy"
          htmlId="grace"
          selected
          text="Grace Week (One Time Only)"
        />
        <RadioOption
          description="Players missing the deadline will earn points equal to the lowest score in the pool for the given week."
          groupName="missingPolicy"
          htmlId="low"
          text="Low Score"
        />
        <RadioOption
          description="No tolerance for missing the deadline. Players who miss the deadline will score zero points - no exceptions."
          groupName="missingPolicy"
          htmlId="zero"
          text="Zero Tolerance"
        />
      </div>
    </div>
  )
}
