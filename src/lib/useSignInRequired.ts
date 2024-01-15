import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export const useSignInRequired = async (sendTo = "/login") => {
	const serverSession = await getServerSession()
	if (!serverSession) {
		redirect(sendTo)
	}
}
