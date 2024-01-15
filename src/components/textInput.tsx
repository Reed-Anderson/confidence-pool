import classNames from "classnames"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export type TextInputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>

export const TextInput = (props: TextInputProps) => {
	return (
		<input
			{...props}
			className={classNames(
				"border h-10 w-72 indent-2 font-light rounded-sm focus:border-blue-500 focus:outline-none",
				props.className
			)}
		/>
	)
}
