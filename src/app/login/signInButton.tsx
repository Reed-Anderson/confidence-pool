"use client"
import { Button } from "@components/button"
import { BuiltInProviderType } from "next-auth/providers/index"
import { signIn } from "next-auth/react"

interface SignInButtonProps {
	icon: React.ReactNode
	provider: BuiltInProviderType
}

export const SignInButton = (props: SignInButtonProps) => {
	return (
		<Button
			className="flex items-center gap-2 justify-center w-80 bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400 p-2"
			onClick={() => signIn(props.provider, { callbackUrl: "/pools" })}
			type="button"
		>
			<span className="text-2xl">{props.icon}</span>
			<span>
				Sign in with{" "}
				<span className="capitalize">{props.provider}</span>
			</span>
		</Button>
	)
}
