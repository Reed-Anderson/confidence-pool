import { Banner } from "@components/banner"
import { MyPicksView } from "./myPicks/myPicksView"
import { PoolSidebar } from "./poolSidebar"
import { StandingsView } from "./standingsView"
import { ViewSwitch } from "./viewSwitch"

export default function PoolDetailsPage() {
	return (
		<>
			<Banner
				backLink="/pools"
				title="Reed's Cool Pool"
				secondaryTitle="Major League Soccer"
			/>
			<div className="flex h-full container px-8 overflow-hidden m-auto">
				<PoolSidebar />
				<div className="flex-grow overflow-hidden p-4 flex items-start flex-row justify-center gap-4">
					<ViewSwitch
						viewLookup={{
							myPicks: <MyPicksView />,
							standings: <StandingsView />,
							weeklyResults: <div />,
							settings: <div />,
							commissioner: <div />
						}}
					/>
				</div>
			</div>
		</>
	)
}
