"use client"
import { SessionProvider } from "next-auth/react"
import { PropsWithChildren } from "react"

/**
 * A custom provider component that wraps the NextAuth session provider.
 *
 * @returns The NextAuth session provider with the children components.
 */
export default function NextAuthProvider(props: PropsWithChildren) {
	return <SessionProvider>{props.children}</SessionProvider>
}
