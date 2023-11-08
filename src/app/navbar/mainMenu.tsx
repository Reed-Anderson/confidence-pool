import { FaBars, FaGamepad, FaQuestion } from "react-icons/fa"
import { NavbarMenu } from "./navbarMenu"

export const MainMenu = () => {
  return (
    <NavbarMenu
      ariaLabel="Main Menu"
      options={[
        {
          href: "leagues",
          startContent: <FaGamepad />,
          title: "Supported Leagues",
        },
        { href: "rules", startContent: <FaQuestion />, title: "How To Play" },
      ]}
    >
      <div className={`text-white hover:bg-gray-100 hover:bg-opacity-20 p-2`}>
        <FaBars />
      </div>
    </NavbarMenu>
  )
}
