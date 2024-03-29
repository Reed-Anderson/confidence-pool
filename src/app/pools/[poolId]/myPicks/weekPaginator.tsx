"use client"
import * as ScrollArea from "@radix-ui/react-scroll-area"
import { useHorizontalScroll } from "@src/lib/useHorizontalScroll"
import { WeekPaginatorItem, WeekStatus } from "./weekPaginatorItem"

/**
 * Component for rendering a week paginator.
 * The week paginator displays a list of week items and allows horizontal scrolling.
 */
export const WeekPaginator = () => {
	const containerRef = useHorizontalScroll()

	return (
		<ScrollArea.Root className="w-full m-auto">
			<ScrollArea.Viewport ref={containerRef}>
				<div className="flex items-center w-fit gap-2 m-auto pb-4 pt-1">
					<WeekPaginatorItem
						title="Week 1"
						weekStatus={WeekStatus.Submitted}
					/>
					<WeekPaginatorItem
						title="Week 2"
						weekStatus={WeekStatus.Submitted}
					/>
					<WeekPaginatorItem
						title="Week 3"
						weekStatus={WeekStatus.Submitted}
					/>
					<WeekPaginatorItem
						title="Week 4"
						weekStatus={WeekStatus.Submitted}
					/>
					<WeekPaginatorItem
						title="Week 5"
						weekStatus={WeekStatus.Winner}
					/>
					<WeekPaginatorItem
						isSelected
						title="Week 6"
						weekStatus={WeekStatus.DueSoon}
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
