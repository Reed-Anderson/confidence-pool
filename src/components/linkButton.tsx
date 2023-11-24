import Link from "next/link"
import { Button } from "./button"
import { ReactNode } from "react"

interface LinkButtonProps {
  buttonClassName?: string
  children?: ReactNode
  href: string
  linkClassName?: string
}

export const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link
      className={"block " + (props.linkClassName || "")}
      href={props.href}
    >
      <Button
        className={props.buttonClassName}
        tabIndex={-1}
      >
        {props.children}
      </Button>
    </Link>
  )
}
