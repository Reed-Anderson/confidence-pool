import classNames from "classnames"
import {
  FaCalendarCheck,
  FaCalendarTimes,
  FaCheck,
  FaHandsHelping,
  FaMedal,
  FaRegClock,
} from "react-icons/fa"

export enum WeekStatus {
  DueSoon,
  GraceWeek,
  MissedDeadline,
  Submitted,
  SubmittedEarly,
  Winner,
}

interface WeekPaginatorItemProps {
  isSelected?: boolean
  title: string
  weekStatus?: WeekStatus
}

export const WeekPaginatorItem = (props: WeekPaginatorItemProps) => {
  return (
    <button
      className={classNames(
        "flex",
        "items-center",
        "gap-1",
        "py-2 px-3 rounded-md",
        "text-gray-500",
        "text-sm",
        "flex-shrink-0",
        {
          "m-[1px]": !props.isSelected,
          "hover:border hover:m-0 hover:bg-gray-50": !props.isSelected,
          "font-light": !props.isSelected,
          "bg-white border border-gray-300": props.isSelected,
          "text-gray-900": props.isSelected,
        },
      )}
    >
      <span className="text-lg">
        {props.weekStatus === WeekStatus.Submitted && (
          <FaCheck className="text-green-600" />
        )}
        {props.weekStatus === WeekStatus.Winner && (
          <FaMedal className="text-amber-400" />
        )}
        {props.weekStatus === WeekStatus.SubmittedEarly && (
          <FaCalendarCheck className="text-green-600" />
        )}
        {props.weekStatus === WeekStatus.GraceWeek && (
          <FaHandsHelping className="text-amber-500" />
        )}
        {props.weekStatus === WeekStatus.MissedDeadline && (
          <FaCalendarTimes className="text-red-500" />
        )}
        {props.weekStatus === WeekStatus.DueSoon && (
          <FaRegClock className="text-blue-500" />
        )}
        {/* {props.weekStatus === WeekStatus.TurnedIn && ()} */}
      </span>
      {props.title}
    </button>
  )
}
