import { SHADE_ON_HOVER } from "@components/styles"
import { FaBars, FaGamepad, FaQuestion } from "react-icons/fa"
import { NavbarMenu } from "./navbarMenu"

export const MainMenu = () => {
  return (
    <NavbarMenu
      options={[
        { href: "", startContent: <FaGamepad />, title: "Supported Leagues" },
        { href: "", startContent: <FaQuestion />, title: "How To Play" },
      ]}
    >
      <button className={`text-white ${SHADE_ON_HOVER} p-2`}>
        <FaBars />
      </button>
    </NavbarMenu>
  )
}
