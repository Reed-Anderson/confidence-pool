"use client"
import { TextInput } from "@components/textInput"
import { useCreateStore } from "./create.store"

export const PoolName = () => {
  const poolName = useCreateStore((state) => state.poolName)
  const setPoolName = useCreateStore((state) => state.setPoolName)
  return (
    <>
      <h2 className="pt-3 pb-1 font-semibold text-sm">Pool Name</h2>
      <TextInput
        onChange={(e) => setPoolName(e.target.value)}
        maxLength={80}
        value={poolName}
      />
    </>
  )
}
