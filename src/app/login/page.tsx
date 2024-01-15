import { SignInButton } from "./signInButton"
import { FaDiscord } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"

export default function LoginPage() {
	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="bg-white border p-8 gap-4 flex flex-col">
				<h1 className="text-xl font-bold text-center text-gray-700">
					Sign in to Confidence Pools
				</h1>
				<SignInButton icon={<FcGoogle />} provider="google" />
				<SignInButton
					icon={<FaDiscord className="text-discord" />}
					provider="discord"
				/>
				<SignInButton icon={<FaXTwitter />} provider="twitter" />
			</div>
		</div>
	)
}
