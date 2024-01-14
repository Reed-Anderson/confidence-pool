import { Card } from "@components/card"
import { FaHatWizard } from "react-icons/fa"

export const FeaturePredict = () => {
	return (
		<Card iconElement={<FaHatWizard />} title="Make Your Predictions">
			<p>
				Put your sports knowledge to the test. Predict game outcomes
				with confidence, strategize your picks, and watch your skills
				shine.
			</p>
		</Card>
	)
}
