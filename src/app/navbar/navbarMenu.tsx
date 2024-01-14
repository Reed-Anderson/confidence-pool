import { ReactNode } from "react"
import { NavbarMenuDesktop } from "./navbarMenuDesktop"
import { NavbarMenuMobile } from "./navbarMenuMobile"
import { NavbarMenuMobileOptionProps } from "./navbarMenuMobileOption"

export interface NavbarMenuProps {
	ariaLabel: string
	children: ReactNode
	options: NavbarMenuMobileOptionProps[]
}

export const NavbarMenu = (props: NavbarMenuProps) => {
	return (
		<>
			<NavbarMenuDesktop {...props} />
			<NavbarMenuMobile {...props} />
		</>
	)
}
