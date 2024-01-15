import classNames from "classnames"
import { FaAngleLeft } from "react-icons/fa"
import { LinkButton } from "./linkButton"

interface BannerProps {
	backLink?: string
	secondaryTitle?: string
	title: string
}

export const Banner = (props: BannerProps) => {
	return (
		<div className="border-b bg-white z-10 sticky top-0 px-2">
			<div className="flex items-center gap-2 container m-auto">
				{props.backLink && (
					<LinkButton
						buttonClassName="border h-8 w-8 flex items-center justify-center
              shadow-sm rounded-md hover:bg-gray-50"
						href={props.backLink}
					>
						<FaAngleLeft className="text-gray-600" />
					</LinkButton>
				)}
				<h1
					className={classNames("flex", "flex-col", "px-4 md:px-0", {
						"py-2": !!props.secondaryTitle,
						"py-4": !props.secondaryTitle
					})}
				>
					<span>{props.title}</span>
					{props.secondaryTitle && (
						<span className="flex items-end text-xs text-gray-500">
							{props.secondaryTitle}
						</span>
					)}
				</h1>
			</div>
		</div>
	)
}
