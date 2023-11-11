import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={
        "shadow-sm p-2 hover:scale-105 rounded-sm" + " " + props.className
      }
    />
  )
}
