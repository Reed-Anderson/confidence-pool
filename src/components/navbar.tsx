import { FaBars } from "react-icons/fa"

export const TopNavBar = () => {
  return (
    <nav className="bg-brand px-4 py-2 shadow-lg sticky top-0">
      <div className="mx-auto flex items-center justify-between">
        <button className="text-white text-2xl tracking-tight hover:text-slate-200 p-2 font-extralight">
          Confidence Pools
        </button>
        <button className="text-white hover:bg-opacity-50 hover:bg-slate-500 p-2">
          <FaBars />
        </button>
      </div>
    </nav>
  )
}
