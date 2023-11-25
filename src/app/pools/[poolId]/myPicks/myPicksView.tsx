import { MyPicksForm } from "./myPicksForm"
import { WeekPaginator } from "./weekPaginator"

export const MyPicksView = () => {
  return (
    <div className="w-full max-w-2xl overflow-hidden flex flex-col gap-1">
      <WeekPaginator />
      <MyPicksForm />
    </div>
  )
}
