import { create } from "zustand"

interface CreateStoreInterface {
	correctScoreBonus: string
	setCorrectScoreBonus: (bonus: string) => void
	missedDeadlinePolicy: string
	setMissedDeadlinePolicy: (policy: string) => void
	poolName: string
	setPoolName: (name: string) => void
	selectedLeagueId: number
	setSelectedLeagueId: (id: number) => void
}

export const useCreateStore = create<CreateStoreInterface>((set) => ({
	/* Correct Score Bonus */
	correctScoreBonus: "",
	setCorrectScoreBonus: (bonus: string) =>
		set(() => ({ correctScoreBonus: bonus })),

	/* Missed Deadline Policy */
	missedDeadlinePolicy: "",
	setMissedDeadlinePolicy: (policy: string) =>
		set(() => ({ missedDeadlinePolicy: policy })),

	/* Pool Name */
	poolName: "",
	setPoolName: (name: string) => set(() => ({ poolName: name })),

	/* Selected League */
	selectedLeagueId: -1,
	setSelectedLeagueId: (id: number) => set(() => ({ selectedLeagueId: id })),
}))
