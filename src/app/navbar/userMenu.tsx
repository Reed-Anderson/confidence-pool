import { LinkButton } from "@components/linkButton"
import { getServerSession } from "next-auth"
import {
	FaAngleDown,
	FaIdCard,
	FaRightFromBracket,
	FaRightToBracket
} from "react-icons/fa6"
import { NavbarMenu } from "./navbarMenu"

export const UserMenu = async () => {
	const serverSession = await getServerSession()

	if (serverSession) {
		return (
			<NavbarMenu ariaLabel="User" options={LOGGED_IN_MENU_OPTIONS}>
				<div className="flex items-center gap-1 text-gray-100 p-2 hover:bg-gray-100 hover:bg-opacity-20">
					<span className="text-lg">
						<FaAngleDown />
					</span>
					{serverSession?.user?.name}
				</div>
			</NavbarMenu>
		)
	}

	return (
		<LinkButton
			buttonClassName="text-gray-100 hover:bg-gray-800 flex items-center gap-2"
			href="/login"
		>
			<FaRightToBracket />
			Sign In
		</LinkButton>
	)
}

const LOGGED_IN_MENU_OPTIONS = [
	{
		title: "My Pools",
		href: "/pools",
		startContent: <FaIdCard />
	},
	{
		href: "/logout",
		startContent: <FaRightFromBracket />,
		title: "Log Out"
	}
]
