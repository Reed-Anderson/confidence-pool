import { Card } from "@components/card"
import { FaTrophy } from "react-icons/fa"

export const FeatureChampion = () => {
  return (
    <Card iconElement={<FaTrophy />} title="Become A Champion">
      <p>
        Rise to the top of the leaderboard. Conquer your friends and rivals, and
        claim your place as the ultimate sports prediction champion.
      </p>
    </Card>
  )
}
