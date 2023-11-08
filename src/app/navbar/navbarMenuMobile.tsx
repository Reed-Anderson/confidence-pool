"use client"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { NavbarMenuMobileOption } from "./navbarMenuMobileOption"
import { NavbarMenuProps } from "./navbarMenu"

export const NavbarMenuMobile = (props: NavbarMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
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
