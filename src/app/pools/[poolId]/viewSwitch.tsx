"use client"
import { parseAsStringEnum, useQueryState } from "next-usequerystate"
import { ReactNode } from "react"
import { View } from "./sidebarLink"

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
