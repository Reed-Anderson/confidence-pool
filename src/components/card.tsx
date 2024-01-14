import { ReactNode } from "react"

interface CardProps {
	children: ReactNode
	iconElement?: ReactNode
	title: string
}

export const Card = (props: CardProps) => {
	return (
		<div className="flex flex-col rounded-md shadow-md border border-gray-200">
			<div className="flex items-center gap-2 text-lg p-4 bg-white">
				{props.iconElement && <span>{props.iconElement}</span>}
				<span>{props.title}</span>
			</div>
			<div className="flex-grow border-t border-gray-100 p-4 text-gray-700 bg-white">
				{props.children}
			</div>
		</div>
	)
}
