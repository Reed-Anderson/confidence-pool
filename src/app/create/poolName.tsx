"use client"
import { useCreateStore } from "./create.store"

export const PoolName = () => {
  const poolName = useCreateStore((state) => state.poolName)
  const setPoolName = useCreateStore((state) => state.setPoolName)
  return (
    <>
      <h2 className="py-5 font-semibold">Pool Name</h2>
      <input
        aria-label="Pool Name"
        className="border h-8 w-72 indent-2 font-light"
        onChange={(e) => setPoolName(e.target.value)}
        maxLength={80}
        value={poolName}
      />
    </>
  )
}
