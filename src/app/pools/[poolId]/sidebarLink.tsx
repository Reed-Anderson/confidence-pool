"use client"
import classNames from "classnames"
import { parseAsStringEnum, useQueryState } from "next-usequerystate"
import { FaAngleRight } from "react-icons/fa"

interface SidebarLinkProps {
  title: string
  view: View
}

export enum View {
  MyPicks = "myPicks",
  Standings = "standings",
  WeeklyResults = "weeklyResults",
  Settings = "settings",
}

export const SidebarLink = (props: SidebarLinkProps) => {
  const [view, setView] = useQueryState(
    "view",
    parseAsStringEnum<View>(Object.values(View)).withDefault(View.MyPicks),
  )
  const isSelected = view === props.view
  return (
    <button
      className={classNames({
        /* Always On */
        "cursor-pointer": true,
        group: true,
        "p-4": true,
        "rounded-md": true,

        /* Not Selected */
        "m-[1px]": !isSelected,
        "text-gray-700": !isSelected,
        "font-light": !isSelected,

        /* Not Selected :hover */
        "hover:border": !isSelected,
        "hover:m-0": !isSelected,
        "hover:shadow-sm": !isSelected,

        /* Selected */
        "bg-white": isSelected,
        "border-gray-300": isSelected,
        "shadow-sm": isSelected,
        border: isSelected,
      })}
      onClick={() => setView(props.view)}
    >
      <div className="flex items-center justify-between">
        {props.title}
        <FaAngleRight
          className={classNames(
            "text-gray-600",
            "opacity-0",
            "transition-all",
            "duration-150",
            "ease-in",
            { "group-hover:opacity-100": !isSelected },
          )}
        />
      </div>
    </button>
  )
}
