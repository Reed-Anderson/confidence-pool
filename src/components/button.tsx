import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  className: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        "shadow-sm p-2 hover:scale-105 rounded-sm" + " " + props.className
      }
    >
      {props.children}
    </button>
  )
}
