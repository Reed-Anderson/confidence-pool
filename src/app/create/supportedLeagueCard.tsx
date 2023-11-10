import { FaCheckCircle } from "react-icons/fa"
import Image from "next/image"
import classNames from "classnames"

interface SupportedLeagueCardProps {
  title?: string
  image?: string
  selected?: boolean
}

export const SupportedLeagueCard = (props: SupportedLeagueCardProps) => {
  return (
    <div
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
        { "border-2": props.selected, "border-gray-900": props.selected },
      )}
    >
      <div className="h-52 flex items-center relative">
        {props.selected && <FaCheckCircle className="absolute top-4 left-4" />}
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
      <h1 className="p-4 bg-gray-50 border-t text-sm flex justify-between items-center flex-grow">
        {props.title ? (
          <span>{props.title}</span>
        ) : (
          <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48" />
        )}
      </h1>
    </div>
  )
}
