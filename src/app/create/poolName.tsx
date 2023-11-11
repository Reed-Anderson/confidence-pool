"use client"
import { TextInput } from "@components/textInput"
import { useCreateStore } from "./create.store"

export const PoolName = () => {
  const poolName = useCreateStore((state) => state.poolName)
  const setPoolName = useCreateStore((state) => state.setPoolName)
  return (
    <>
      <h2 className="py-5 font-semibold">Pool Name</h2>
      <TextInput
        aria-label="Pool Name"
        onChange={(e) => setPoolName(e.target.value)}
        maxLength={80}
        value={poolName}
      />
    </>
  )
}
