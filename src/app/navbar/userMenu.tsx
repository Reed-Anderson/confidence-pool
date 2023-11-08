import { FaAngleDown, FaSignInAlt, FaUser } from "react-icons/fa"
import { NavbarMenu } from "./navbarMenu"

export const UserMenu = () => {
  return (
    <NavbarMenu
      ariaLabel="User Menu"
      options={[
        { href: "login", startContent: <FaSignInAlt />, title: "Log In" },
        { href: "register", startContent: <FaUser />, title: "Register" },
      ]}
    >
      <div
        className={`flex items-center gap-1 text-gray-100 p-2 hover:bg-gray-100 hover:bg-opacity-20`}
      >
        <span className="text-lg">
          <FaAngleDown />
        </span>
        Reed
      </div>
    </NavbarMenu>
  )
}
