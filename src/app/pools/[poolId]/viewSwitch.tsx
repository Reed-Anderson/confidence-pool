"use client"
import { useQueryState, parseAsStringEnum } from "next-usequerystate"
import { View } from "./sidebarLink"
import { ReactNode } from "react"

interface ViewSwitchProps {
  viewLookup: Record<View, ReactNode>
}

export const ViewSwitch = (props: ViewSwitchProps) => {
  const [view] = useQueryState(
    "view",
    parseAsStringEnum<View>(Object.values(View)).withDefault(View.MyPicks),
  )
  return props.viewLookup[view]
}
