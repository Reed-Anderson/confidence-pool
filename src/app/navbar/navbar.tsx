import { MainMenu } from "./mainMenu"
import { UserMenu } from "./userMenu"

export const TopNavBar = () => {
  return (
    <nav className="bg-brand px-4 py-2 shadow-lg ">
      <div className="mx-auto flex items-center">
        <MainMenu />
        <button className="text-white text-2xl tracking-tight hover:text-slate-200 p-2 font-extralight">
          Confidence Pools
        </button>
        <div className="flex-grow" />
        <UserMenu />
      </div>
    </nav>
  )
}
