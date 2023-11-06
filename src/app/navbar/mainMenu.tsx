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
      <button
        className={`text-white hover:bg-gray-100 hover:bg-opacity-20 p-2`}
      >
        <FaBars />
      </button>
    </NavbarMenu>
  )
}
