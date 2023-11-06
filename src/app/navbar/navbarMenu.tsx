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
        <DropdownTrigger className="hidden md:flex">
          {props.children}
        </DropdownTrigger>
        <DropdownMenu>
          {props.options.map((option) => (
            <MenuItem key={option.title} startContent={option.startContent}>
              {option.title}
            </MenuItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <span className="md:hidden" onClick={() => setIsOpen(true)}>
        {props.children}
      </span>
      {isOpen && (
        <div
          className="
            w-screen
            h-screen
            bg-gray-950
            bg-opacity-90
            absolute
            top-0
            left-0
            z-50
            text-gray-100
            flex
            justify-center
            flex-col
            items-center"
        >
          <div
            className="absolute top-0 right-0 text-3xl p-5"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </div>
          {props.options.map((option) => (
            <NavbarMenuMobileOption key={option.title} {...option} />
          ))}
        </div>
      )}
    </>
  )
}
