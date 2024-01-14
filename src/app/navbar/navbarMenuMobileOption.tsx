import { ReactNode } from "react"

export interface NavbarMenuMobileOptionProps {
	href: string
	startContent: ReactNode
	title: string
}

export const NavbarMenuMobileOption = (props: NavbarMenuMobileOptionProps) => {
	return (
		<button
			className="p-5 flex items-center gap-2 text-2xl border-b-1 last:border-b-0"
			type="button"
		>
			{props.startContent}
			{props.title}
		</button>
	)
}
