import { Card } from "@components/card"
import { FaEnvelope } from "react-icons/fa"

export const FeatureInvite = () => {
  return (
    <Card iconElement={<FaEnvelope />} title="Invite Your Friends">
      <p>
        Gather your crew for a thrilling sports showdown. Bring friends on
        board, create your pick&apos;em pool, and get ready to compete.
      </p>
    </Card>
  )
}
