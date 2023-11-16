import { Banner } from "@components/banner"
import { StandingsCard } from "./standingsCard"
import { PoolSidebar } from "./poolSidebar"

export default function PoolPage() {
  return (
    <>
      <Banner title="Reed's Cool Pool" secondaryTitle="Major League Soccer" />
      <div className="flex h-full container m-auto">
        <PoolSidebar />
        <div className="flex-grow p-4 flex flex-col items-start md:flex-row justify-center gap-4">
          <StandingsCard
            position={3}
            score={95}
            scoreLabel="points"
            title="Last Week"
            totalPlayers={12}
          />
          <StandingsCard
            position={1}
            score={473}
            scoreLabel="points"
            title="Overall"
            totalPlayers={12}
          />
          <StandingsCard
            position={2}
            score={2}
            scoreLabel="wins"
            title="Weekly Wins"
            totalPlayers={12}
          />
        </div>
      </div>
      {/* <div className="flex flex-col h-full p-4 gap-4 m-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          
        </div>
        <div className="border flex-grow rounded-md bg-white"></div>
      </div> */}
    </>
  )
}
