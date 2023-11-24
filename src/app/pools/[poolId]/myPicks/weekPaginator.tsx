import { WeekPaginatorItem } from "./weekPaginatorItem"

export const WeekPaginator = () => {
  return (
    <div className="flex w-fit gap-2 m-auto">
      <WeekPaginatorItem
        isSelected
        title="Week 1"
      />
      <WeekPaginatorItem title="Week 2" />
      <WeekPaginatorItem title="Week 3" />
      <WeekPaginatorItem title="Week 4" />
      <WeekPaginatorItem title="Week 5" />
    </div>
  )
}
