"use client"
import { Divider } from "@components/divider"
import {
	Arrow,
	Content,
	Item,
	Portal,
	Root,
	Trigger
} from "@radix-ui/react-dropdown-menu"
import { Fragment } from "react"
import { NavbarMenuProps } from "./navbarMenu"

export const NavbarMenuDesktop = (props: NavbarMenuProps) => {
	return (
		<Root>
			<Trigger className="hidden md:flex" aria-label={props.ariaLabel}>
				{props.children}
			</Trigger>
			<Portal>
				<Content className="p-2 bg-white rounded-sm z-30">
					{props.options.map((option, index) => (
						<Fragment key={option.title}>
							{index > 0 && <Divider />}
							<a href={option.href}>
								<Item className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 cursor-pointer">
									{option.startContent}
									{option.title}
								</Item>
							</a>
						</Fragment>
					))}
					<Arrow className="fill-white" />
				</Content>
			</Portal>
		</Root>
	)
}
