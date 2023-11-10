import classNames from "classnames"

interface RadioOptionProps {
  description?: string
  groupName: string
  htmlId: string
  selected?: boolean
  text: string
}

export const RadioOption = (props: RadioOptionProps) => {
  return (
    <div
      className={classNames(
        "flex gap-4 items-center p-2 rounded-md border border-gray-200",
        {
          "border bg-white": props.selected,
        },
        {
          "border-transparent hover:border-gray-300": !props.selected,
        },
      )}
    >
      <input
        type="radio"
        id={props.htmlId}
        name={props.groupName}
        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
      />
      <label
        htmlFor={props.htmlId}
        className="cursor-pointer flex flex-col space-x-2 text-gray-700"
      >
        <span>{props.text}</span>
        <p className="text-sm text-gray-600">{props.description}</p>
      </label>
    </div>
  )
}
