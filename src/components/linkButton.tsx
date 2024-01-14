import Link from "next/link"
import { ReactNode } from "react"
import { Button } from "./button"

interface LinkButtonProps {
	buttonClassName?: string
	children?: ReactNode
	href: string
	linkClassName?: string
}

export const LinkButton = (props: LinkButtonProps) => {
	return (
		<Link
			className={`block ${props.linkClassName || ""}`}
			href={props.href}
		>
			<Button className={props.buttonClassName} tabIndex={-1}>
				{props.children}
			</Button>
		</Link>
	)
}
