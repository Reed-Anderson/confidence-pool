"use client"
import { TextInput } from "@components/textInput"
import { useCreateStore } from "./create.store"
import SectionHeader from "@components/sectionHeader"

export const PoolName = () => {
	const poolName = useCreateStore((state) => state.poolName)
	const setPoolName = useCreateStore((state) => state.setPoolName)
	return (
		<section>
			<SectionHeader title="Pool Name" />
			<TextInput
				className="m-auto"
				onChange={(e) => setPoolName(e.target.value)}
				maxLength={80}
				value={poolName}
			/>
		</section>
	)
}
