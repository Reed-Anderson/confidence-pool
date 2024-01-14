import { ReactNode } from "react"

interface FullPageShadowProps {
	children: ReactNode
	closeFunction: () => void
}

export const FullPageShadow = (props: FullPageShadowProps) => {
	return (
		<div
			className="fixed bg-gray-500 top-0 left-0 bg-opacity-20 w-screen
        		h-screen flex items-center justify-center z-30"
			onClick={props.closeFunction}
			onKeyUp={(e) => e.key === "Escape" && props.closeFunction()}
		>
			{props.children}
		</div>
	)
}
