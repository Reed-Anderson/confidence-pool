import classNames from "classnames"

interface SidebarLinkProps {
  isSelected?: boolean
  title: string
}

export const SidebarLink = (props: SidebarLinkProps) => {
  return (
    <a
      className={classNames("p-4 cursor-pointer border border-transparent", {
        "text-gray-700": !props.isSelected,
        "hover:underline border-gray-200 hover:shadow-sm": !props.isSelected,
        "text-gray-900 font-bold border-gray-300 rounded-md": props.isSelected,
        "border-gray-300 bg-white shadow-sm": props.isSelected,
      })}
    >
      {props.title}
    </a>
  )
}
