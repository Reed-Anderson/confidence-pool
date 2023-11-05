import { SHADE_ON_HOVER } from "@components/styles"
import { FaBars } from "react-icons/fa"
import { NavbarMenu } from "./navbarMenu"

export const MainMenu = () => {
  return (
    <NavbarMenu
      options={[
        { href: "", title: "One" },
        { href: "", title: "Two" },
      ]}
    >
      <button className={`text-white ${SHADE_ON_HOVER} p-2`}>
        <FaBars />
      </button>
    </NavbarMenu>
  )
}
