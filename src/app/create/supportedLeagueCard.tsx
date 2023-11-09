import { FaAngleRight } from "react-icons/fa"
import Image from "next/image"
import { SupportedLeague } from "@prisma/client"

interface SupportedLeagueCardProps {
  league: SupportedLeague
}

export const SupportedLeagueCard = (props: SupportedLeagueCardProps) => {
  return (
    <div
      key={props.league.id}
      className="group rounded-md shadow-md hover:shadow-lg cursor-pointer
            bg-gradient-to-b from-white to-gray-200 opacity-80 hover:scale-105 border"
    >
      <div className="h-52 flex items-center">
        <Image
          className="m-auto p-4"
          src={props.league.logo}
          alt={`${props.league.name} Logo`}
          height={200}
          width={200}
        />
      </div>
      <h1 className="p-4 bg-gray-50 border-t text-sm flex justify-between items-center">
        <span>{props.league.name}</span>
        <FaAngleRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </h1>
    </div>
  )
}
