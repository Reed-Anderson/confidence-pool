"use client"
import { ImageCard } from "@components/imageCard"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import { JoinOrCreateDialog } from "./joinOrCreateDialog"

export const AddPoolButton = () => {
	const [dialogOpen, setDialogOpen] = useState(false)
	return (
		<>
			{dialogOpen && (
				<JoinOrCreateDialog
					closeFunction={() => setDialogOpen(false)}
				/>
			)}
			<ImageCard
				faIcon={<FaPlus className="text-white" />}
				faIconParentClassName="bg-green-800"
				onClick={() => setDialogOpen(true)}
				title="Add Pool"
			/>
		</>
	)
}
