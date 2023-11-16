"use client"
import { useCreateStore } from "./create.store"
import { LabeledTextInput } from "@components/labeledTextInput"

export const PoolName = () => {
  const poolName = useCreateStore((state) => state.poolName)
  const setPoolName = useCreateStore((state) => state.setPoolName)
  return (
    <LabeledTextInput
      label="Pool Name"
      inputId="poolName"
      onChange={(val) => setPoolName(val)}
      textInputProps={{ maxLength: 80 }}
      value={poolName}
    />
  )
}
