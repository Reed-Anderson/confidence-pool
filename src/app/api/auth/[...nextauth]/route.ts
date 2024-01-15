import { prisma } from "@src/lib/prisma"
import NextAuth, { CallbacksOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

/*******************************************************************************
 *
 * Google OAuth
 *
 ******************************************************************************/
const googleProvider = GoogleProvider({
	clientId: process.env.GOOGLE_CLIENT_ID ?? "",
	clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
})

const handleGoogleSignIn = async (
	params: Parameters<CallbacksOptions["signIn"]>[0]
) => {
	await prisma.user.upsert({
		create: {
			email: params.user.email ?? "",
			id: params.user.id,
			name: params.user.name ?? "New User",
			provider: params.account?.provider || "google"
		},
		update: {
			email: params.user.email ?? "",
			id: params.user.id,
			name: params.user.name ?? "New User",
			provider: params.account?.provider || "google"
		},
		where: {
			id: params.user.id
		}
	})
}

/*******************************************************************************
 *
 * NextAuth
 *
 ******************************************************************************/
const handler = NextAuth({
	providers: [googleProvider],
	callbacks: {
		async signIn(signInObj) {
			switch (signInObj.account?.provider) {
				case "google":
					await handleGoogleSignIn(signInObj)
					return true
				default:
					throw new Error("Unrecognized Provider")
			}
		}
	}
})

export { handler as GET, handler as POST }
