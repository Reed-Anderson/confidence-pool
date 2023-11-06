import { SHADE_ON_HOVER } from "@components/styles"
import { FaAngleDown, FaSignInAlt, FaUser } from "react-icons/fa"
import { NavbarMenu } from "./navbarMenu"

export const UserMenu = () => {
  return (
    <NavbarMenu
      options={[
        { href: "", startContent: <FaSignInAlt />, title: "Log In" },
        { href: "", startContent: <FaUser />, title: "Register" },
      ]}
    >
      <button
        className={`flex items-center gap-1 text-gray-100 p-2 ${SHADE_ON_HOVER}`}
      >
        <span className="text-lg">
          <FaAngleDown />
        </span>
        Reed
      </button>
    </NavbarMenu>
  )
}
