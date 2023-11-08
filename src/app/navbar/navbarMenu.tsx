import { ReactNode } from "react"
import { NavbarMenuMobileOptionProps } from "./navbarMenuMobileOption"
import { NavbarMenuMobile } from "./navbarMenuMobile"
import { NavbarMenuDesktop } from "./navbarMenuDesktop"

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
