import { MyPicksForm } from "./myPicksForm"
import { WeekPaginator } from "./weekPaginator"

export const MyPicksView = () => {
  return (
    <div className="container flex flex-col gap-4">
      <WeekPaginator />
      <MyPicksForm />
    </div>
  )
}
