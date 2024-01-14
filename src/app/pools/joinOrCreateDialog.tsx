"use client"
import { Button } from "@components/button"
import { FullPageShadow } from "@components/fullPageShadow"
import { LinkButton } from "@components/linkButton"
import { useEffect } from "react"

interface JoinOrCreateDialogProps {
	closeFunction: () => void
}

export const JoinOrCreateDialog = (props: JoinOrCreateDialogProps) => {
	useEffect(() => {
		const closeOnEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				props.closeFunction()
			}
		}

		document.addEventListener("keydown", closeOnEsc)
		return () => {
			document.removeEventListener("keydown", closeOnEsc)
		}
	}, [props])

	return (
		<FullPageShadow closeFunction={props.closeFunction}>
			<div
				className="p-8 bg-white rounded-md z-40 flex flex-col gap-4 w-80"
				onClick={(e) => e.stopPropagation()}
				onKeyUp={(e) => e.key === "Escape" && props.closeFunction()}
			>
				<h1 className="hidden">Add New Pool</h1>
				<div className="flex flex-col gap-2">
					<Button className="bg-gray-700 text-white">
						Join Existing Pool
					</Button>
					<div className="flex items-center text-xs h-2">
						<div className="w-full border-b" />
						<span className="px-2 text-gray-600">OR</span>
						<div className="w-full border-b" />
					</div>
					<LinkButton
						href="/create"
						buttonClassName="bg-gray-700 w-full text-white"
					>
						Create New Pool
					</LinkButton>
				</div>
			</div>
		</FullPageShadow>
	)
}
