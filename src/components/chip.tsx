import { ReactNode } from "react"

interface ChipProps {
  children: ReactNode
  className?: string
}

export const Chip = (props: ChipProps) => {
  return (
    <span className={"px-1.5 py-1 text-xs rounded-xl" + " " + props.className}>
      {props.children}
    </span>
  )
}
