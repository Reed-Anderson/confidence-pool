import classNames from "classnames"
import { ReactNode } from "react"

interface TileContainerProps {
  children: ReactNode
  className?: string
}

export const TileContainer = (props: TileContainerProps) => {
  return (
    <div
      className={classNames(
        "flex flex-wrap flex-col pb-4 md:flex-row items-center gap-8",
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}
