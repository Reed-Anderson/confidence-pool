import { TopNavBar } from "@src/app/navbar/navbar"
import "@src/styles/animations.css"
import "@src/styles/globals.css"
import classNames from "classnames"
import { GeistSans } from "geist/font/sans"
import { Metadata } from "next"
import { PropsWithChildren } from "react"
import NextAuthProvider from "./nextAuthProvider"

export const metadata: Metadata = {
	title: "Confidence Pools",
	description:
		"Elevate your sports experience with our pick'em pool creation app. Challenge friends, make accurate predictions, and compete to become the ultimate champion. Join now for thrilling sports forecasting and friendly competition."
}

export default function RootLayout(props: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={classNames(
					GeistSans.className,
					"h-screen",
					"bg-gradient-to-b",
					"from-sky-50",
					"to-gray-100",
					"overflow-hidden"
				)}
			>
				<NextAuthProvider>
					<>
						<TopNavBar />
						<main className="mx-auto h-[calc(100%-64px)] overflow-auto">
							{props.children}
						</main>
					</>
				</NextAuthProvider>
			</body>
		</html>
	)
}
