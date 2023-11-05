"use client"
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  MenuItem,
} from "@nextui-org/react"
import { ReactNode, useState } from "react"
import { FaTimes } from "react-icons/fa"
import {
  NavbarMenuMobileOption,
  NavbarMenuMobileOptionProps,
} from "./navbarMenuMobileOption"

interface NavbarMenuProps {
  children: ReactNode
  options: NavbarMenuMobileOptionProps[]
}

export const NavbarMenu = (props: NavbarMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Dropdown>
        <DropdownTrigger className="hidden md:block">
          {props.children}
        </DropdownTrigger>
        <DropdownMenu>
          {props.options.map((option) => (
            <MenuItem key={option.title}>{option.title}</MenuItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <div className="md:hidden" onClick={() => setIsOpen(true)}>
        {props.children}
      </div>
      {isOpen && (
        <div className="w-screen h-screen bg-gray-950 bg-opacity-90 absolute top-0 left-0 z-50 text-gray-100">
          <div
            className="absolute top-0 right-0 text-3xl p-5"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
            {props.options.map((option) => (
              <NavbarMenuMobileOption key={option.title} {...option} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
