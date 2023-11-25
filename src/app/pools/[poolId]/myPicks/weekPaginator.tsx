"use client"
import * as ScrollArea from "@radix-ui/react-scroll-area"
import { WeekPaginatorItem, WeekStatus } from "./weekPaginatorItem"

export const WeekPaginator = () => {
  return (
    <ScrollArea.Root className="w-full m-auto">
      <ScrollArea.Viewport>
        <div className="flex w-fit gap-2 m-auto pb-4 pt-1">
          <WeekPaginatorItem
            title="Week 1"
            weekStatus={WeekStatus.DueSoon}
          />
          <WeekPaginatorItem
            title="Week 2"
            weekStatus={WeekStatus.GraceWeek}
          />
          <WeekPaginatorItem
            title="Week 3"
            weekStatus={WeekStatus.MissedDeadline}
          />
          <WeekPaginatorItem
            isSelected
            title="Week 4"
            weekStatus={WeekStatus.Submitted}
          />
          <WeekPaginatorItem
            title="Week 5"
            weekStatus={WeekStatus.SubmittedEarly}
          />
          <WeekPaginatorItem
            title="Week 5"
            weekStatus={WeekStatus.Winner}
          />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
          <WeekPaginatorItem title="Week 5" />
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="bg-gray-200 h-2 flex rounded-xl"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="bg-gray-400 rounded-xl" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
