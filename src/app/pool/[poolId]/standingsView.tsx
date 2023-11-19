import { StandingsCard } from "./standingsCard"

export const StandingsView = () => {
  return (
    <>
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
    </>
  )
}
