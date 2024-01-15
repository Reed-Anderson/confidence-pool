import classNames from "classnames"

interface RadioOptionProps {
	description?: string
	groupName: string
	htmlId: string
	selectedValue: string
	setValue: (value: string) => void
	text: string
}

export const RadioOption = (props: RadioOptionProps) => {
	const selected = props.selectedValue === props.htmlId
	return (
		<div
			className={classNames(
				"flex gap-4 items-center p-2 rounded-md border border-gray-900",
				{
					"border bg-white": selected
				},
				{
					"border-transparent hover:border-gray-300": !selected
				}
			)}
		>
			<input
				type="radio"
				id={props.htmlId}
				name={props.groupName}
				className="text-indigo-600 border-gray-300 focus:ring-indigo-500 shrink-0"
				onChange={() => props.setValue(props.htmlId)}
			/>
			<label
				htmlFor={props.htmlId}
				className="cursor-pointer flex flex-col space-x-2 space-y-2 text-gray-700"
			>
				<span>{props.text}</span>
				<p className="text-sm text-gray-600">{props.description}</p>
			</label>
		</div>
	)
}
