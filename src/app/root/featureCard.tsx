import { Divider } from "@components/components/divider"
import { Card } from "@nextui-org/react"
import { ReactNode } from "react"

interface FeatureCardProps {
  children?: ReactNode
  iconElement: ReactNode
  title: string
}

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <Card className="flex-grow max-w-md text-slate-800 text-left" radius="md">
      <div className="p-4 w-full flex items-center gap-2">
        <span className="text-lg">{props.iconElement}</span>
        <span>{props.title}</span>
      </div>
      <Divider />
      <div className="p-6 text-gray-500 text-sm">{props.children}</div>
    </Card>
  )
}
