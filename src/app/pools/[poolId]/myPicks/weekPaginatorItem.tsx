import classNames from "classnames"
import { LegacyRef, useEffect, useRef } from "react"
import {
	FaCalendarCheck,
	FaCalendarTimes,
	FaCheck,
	FaHandsHelping,
	FaMedal,
	FaRegClock,
} from "react-icons/fa"

export enum WeekStatus {
	DueSoon = 0,
	GraceWeek = 1,
	MissedDeadline = 2,
	Submitted = 3,
	SubmittedEarly = 4,
	Winner = 5,
}

interface WeekPaginatorItemProps {
	isSelected?: boolean
	title: string
	weekStatus?: WeekStatus
}

export const WeekPaginatorItem = (props: WeekPaginatorItemProps) => {
	const scrollRef = useRef<HTMLElement>(null)

	useEffect(() => {
		if (props.isSelected) {
			scrollRef.current?.scrollIntoView({
				inline: "center",
				block: "nearest",
			})
		}
	}, [props.isSelected])

	return (
		<button
			className={classNames(
				"flex",
				"items-center",
				"gap-2",
				"py-2 px-3 rounded-md",
				"text-gray-500",
				"text-sm",
				"flex-shrink-0",
				{
					"m-[1px]": !props.isSelected,
					"hover:border hover:m-0 hover:bg-gray-50":
						!props.isSelected,
					"font-light": !props.isSelected,
					"bg-white border border-gray-300": props.isSelected,
					"text-gray-900": props.isSelected,
				},
			)}
			ref={scrollRef as LegacyRef<HTMLButtonElement> /* TODO: ?? */}
			type="button"
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
			</span>
			{props.title}
		</button>
	)
}
