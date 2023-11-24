import { convertToOrdinal } from "@src/utils/stringConversions"

interface StandingsCardProps {
  position: number
  score: number
  scoreLabel: string
  title: string
  totalPlayers: number
}

export const StandingsCard = (props: StandingsCardProps) => {
  return (
    <div className="flex flex-col rounded-md border bg-white p-3 shadow-md">
      <h1 className="text-sm text-gray-500">{props.title}</h1>
      <div className="w-full px-12 py-6 pt-4">
        <span className="text-2xl font-bold text-emerald-600">
          {props.score}
        </span>
        <label className="text-lg"> {props.scoreLabel}</label>
        <div className="text-gray-500">
          <span className="font-semibold">
            {convertToOrdinal(props.position)}
          </span>
          <label className="font-light"> of {props.totalPlayers}</label>
        </div>
      </div>
    </div>
  )
}
