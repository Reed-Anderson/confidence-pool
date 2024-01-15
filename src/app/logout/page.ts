"use client"
import { signOut } from "next-auth/react"
import { useEffect } from "react"

const LogoutPage = async () => {
	useEffect(() => {
		signOut({ callbackUrl: "/" })
	}, [])
	return null
}

export default LogoutPage
