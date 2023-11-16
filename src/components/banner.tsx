import classNames from "classnames"

interface BannerProps {
  secondaryTitle?: string
  title: string
}

export const Banner = (props: BannerProps) => {
  return (
    <div className="border-b bg-white z-10 sticky top-0">
      <h1
        className={classNames(
          "container",
          "flex",
          "flex-col",
          "m-auto",
          "px-4 md:px-0",
          {
            "py-2": !!props.secondaryTitle,
            "py-4": !props.secondaryTitle,
          },
        )}
      >
        <span>{props.title}</span>
        {props.secondaryTitle && (
          <span className="flex items-end text-xs text-gray-500">
            {props.secondaryTitle}
          </span>
        )}
      </h1>
    </div>
  )
}
