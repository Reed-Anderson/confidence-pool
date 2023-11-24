import classNames from "classnames"

interface WeekPaginatorItemProps {
  isSelected?: boolean
  title: string
}

export const WeekPaginatorItem = (props: WeekPaginatorItemProps) => {
  return (
    <button
      className={classNames("p-2 rounded-md", "text-gray-500 text-sm", {
        "m-[1px]": !props.isSelected,
        "hover:border hover:m-0 hover:bg-gray-50": !props.isSelected,
        "font-light": !props.isSelected,
        "bg-white border border-gray-300": props.isSelected,
        "text-gray-900": props.isSelected,
      })}
    >
      {props.title}
    </button>
  )
}
