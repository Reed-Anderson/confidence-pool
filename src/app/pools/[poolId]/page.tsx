import { Banner } from "@components/banner"
import { PoolSidebar } from "./poolSidebar"
import { ViewSwitch } from "./viewSwitch"
import { StandingsView } from "./standingsView"

export default function PoolDetailsPage() {
  return (
    <>
      <Banner
        title="Reed's Cool Pool"
        secondaryTitle="Major League Soccer"
      />
      <div className="flex h-full container m-auto">
        <PoolSidebar />
        <div className="flex-grow p-4 flex flex-col items-start md:flex-row justify-center gap-4">
          <ViewSwitch
            viewLookup={{
              myPicks: <div />,
              standings: <StandingsView />,
              weeklyResults: <div />,
              settings: <div />,
            }}
          />
        </div>
      </div>
    </>
  )
}
