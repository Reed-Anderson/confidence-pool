"use client"
import { FaCheckCircle } from "react-icons/fa"
import Image from "next/image"
import classNames from "classnames"
import { useCreateStore } from "./create.store"

interface SupportedLeagueCardProps {
  leagueId?: number
  title?: string
  image?: string
}

export const SupportedLeagueCard = (props: SupportedLeagueCardProps) => {
  const selectedLeagueId = useCreateStore((state) => state.selectedLeagueId)
  const setSelectedLeagueId = useCreateStore(
    (state) => state.setSelectedLeagueId,
  )
  const selected = props.leagueId === selectedLeagueId
  return (
    <button
      className={classNames(
        "flex",
        "flex-col",
        "rounded-md",
        "overflow-hidden",
        "shadow-md",
        "hover:shadow-lg",
        "cursor-pointer",
        "bg-gradient-to-b",
        "from-white",
        "to-gray-200",
        "opacity-80",
        "hover:scale-105",
        "border",
        "w-72",
        { border: selected, "border-gray-900": selected },
      )}
      onClick={() => setSelectedLeagueId(props.leagueId ?? -1)}
    >
      <div className="h-52 flex items-center relative w-full">
        {selected && <FaCheckCircle className="absolute top-4 left-4" />}
        {props.image && (
          <Image
            className="m-auto p-4"
            src={props.image}
            alt={`${props.title} Logo`}
            height={200}
            width={200}
          />
        )}
      </div>
      <h1 className="p-4 bg-gray-50 border-t text-sm flex justify-between items-center flex-grow w-full">
        {props.title ? (
          <span>{props.title}</span>
        ) : (
          <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48" />
        )}
      </h1>
    </button>
  )
}
