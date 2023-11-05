import { Card, Divider } from "@nextui-org/react"
import { ReactNode } from "react"

interface FeatureCardProps {
  iconElement: ReactNode
  title: string
}

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <Card
      className="flex-grow h-96 cursor-pointer max-w-md text-slate-800"
      radius="md"
    >
      <div className="p-4 text-left w-full flex items-center gap-2">
        <span className="text-lg">{props.iconElement}</span>
        <span>{props.title}</span>
      </div>
      <Divider />
      <div className="flex-grow"></div>
    </Card>
  )
}
