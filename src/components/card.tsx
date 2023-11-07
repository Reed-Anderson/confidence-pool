import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = (props: CardProps) => {
  return <div>{props.children}</div>
}
