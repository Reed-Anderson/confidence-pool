import { Card } from "@components/card"
import { Chip } from "@components/chip"
import { FaCalendarPlus } from "react-icons/fa"

export const FeatureCreate = () => {
	return (
		<Card iconElement={<FaCalendarPlus />} title="Create Your Pool">
			<p>Create a Confidence Pool for your favorite league below:</p>
			<ul className="p-2 list-[circle]">
				<li className="p-1 ml-4">
					<span className="mr-2">NFL</span>
					<Chip className="blue-tag">Coming Aug 2024!</Chip>
				</li>
				<li className="p-1 ml-4">
					<span className="mr-2">MLS</span>
					<Chip className="blue-tag">Coming Feb 2024!</Chip>
				</li>
				<li className="p-1 ml-4">And more coming soon!</li>
			</ul>
		</Card>
	)
}
