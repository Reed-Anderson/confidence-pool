"use client"
import { Button } from "@components/button"
import { LabeledTextInput } from "@components/labeledTextInput"
import * as Tabs from "@radix-ui/react-tabs"
import { useState } from "react"

export const LoginForm = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<Tabs.Content
			className="gap-8 flex flex-col"
			tabIndex={-1}
			value="LogIn"
		>
			<LabeledTextInput
				inputId="email"
				label="Email"
				onChange={setEmail}
				value={email}
			/>
			<LabeledTextInput
				inputId="password"
				label="Password"
				onChange={setPassword}
				textInputProps={{ type: "password" }}
				value={password}
			/>
			<Button className="bg-gray-800 text-white">Log In</Button>
		</Tabs.Content>
	)
}
