"use client"
import { SHADE_ON_HOVER } from "@components/styles"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react"
import { FaAngleDown, FaSignInAlt, FaUser } from "react-icons/fa"

export const UserMenu = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button
          className={`flex items-center gap-1 text-gray-100 p-2 ${SHADE_ON_HOVER}`}
        >
          <span className="text-lg">
            <FaAngleDown />
          </span>
          Reed
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="login" startContent={<FaSignInAlt />}>
          Log In
        </DropdownItem>
        <DropdownItem key="register" startContent={<FaUser />}>
          Register
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
