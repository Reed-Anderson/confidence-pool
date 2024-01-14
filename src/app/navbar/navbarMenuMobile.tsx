"use client"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { NavbarMenuProps } from "./navbarMenu"
import { NavbarMenuMobileOption } from "./navbarMenuMobileOption"

export const NavbarMenuMobile = (props: NavbarMenuProps) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button
				className="md:hidden"
				onClick={() => setIsOpen(true)}
				type="button"
			>
				{props.children}
			</button>
			{isOpen && (
				<div
					className="
            w-screen
            h-screen
            bg-gray-950
            bg-opacity-90
            absolute
            top-0
            left-0
            z-50
            text-gray-100
            flex
            justify-center
            flex-col
            items-center"
				>
					<button
						className="absolute top-0 right-0 text-3xl p-5"
						onClick={() => setIsOpen(false)}
						type="button"
					>
						<FaTimes />
					</button>
					{props.options.map((option) => (
						<NavbarMenuMobileOption
							key={option.title}
							{...option}
						/>
					))}
				</div>
			)}
		</>
	)
}
