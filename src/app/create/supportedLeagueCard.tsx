"use client"
import { useCreateStore } from "./create.store"
import { ReactNode } from "react"
import { ImageCard } from "@components/imageCard"

interface SupportedLeagueCardProps {
  leagueId?: number
  title?: string
  image?: string
  faIcon?: ReactNode
}

export const SupportedLeagueCard = (props: SupportedLeagueCardProps) => {
  const selectedLeagueId = useCreateStore((state) => state.selectedLeagueId)
  const setSelectedLeagueId = useCreateStore(
    (state) => state.setSelectedLeagueId,
  )
  return (
    <ImageCard
      image={props.image}
      onClick={() => setSelectedLeagueId(props.leagueId ?? -1)}
      selected={props.leagueId === selectedLeagueId}
      title={props.title}
    />
  )
}
