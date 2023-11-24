import classNames from "classnames"
import Image from "next/image"
import { ReactNode } from "react"
import { FaCheckCircle } from "react-icons/fa"

interface ImageCardProps {
  faIcon?: ReactNode
  faIconParentClassName?: string
  image?: string
  onClick?: () => void
  selected?: boolean
  tabIndex?: number
  title?: string
}

export const ImageCard = (props: ImageCardProps) => {
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
        "to-gray-100",
        "opacity-80",
        "hover:scale-105",
        "border",
        "w-72",
        { border: props.selected, "border-gray-900": props.selected },
      )}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
    >
      <div className="h-52 flex items-center relative w-full">
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
        {props.faIcon && (
          <div className="w-full text-4xl text-gray-50 flex justify-center items-center">
            <div
              className={
                "p-4 bg-gray-400 rounded-full " +
                (props.faIconParentClassName || "")
              }
            >
              {props.faIcon}
            </div>
          </div>
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
