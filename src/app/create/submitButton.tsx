"use client"
import { Button } from "@components/button"
import { useCreateStore } from "./create.store"
import classNames from "classnames"

export const SubmitButton = () => {
  const createStore = useCreateStore()
  const formIsValid =
    !!createStore.correctScoreBonus &&
    !!createStore.missedDeadlinePolicy &&
    createStore.poolName.length > 2 &&
    createStore.selectedLeagueId > -1

  return (
    <Button
      className={classNames("bg-gray-700 text-white my-4 w-full md:w-auto", {
        "opacity-40": !formIsValid,
      })}
    >
      Create
    </Button>
  )
}
