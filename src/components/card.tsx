import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  iconElement?: ReactNode
  title: string
}

export const Card = (props: CardProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-md">
      <div className="flex w-full items-center gap-2 text-lg">
        {props.iconElement && <span>{props.iconElement}</span>}
        <span>{props.title}</span>
      </div>
      <div className="text-md mt-0 flex-grow rounded-sm border border-gray-100 bg-slate-100 bg-opacity-75 p-4 text-gray-700">
        {props.children}
      </div>
    </div>
  )
}
