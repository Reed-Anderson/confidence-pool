import { FeatureChampion } from "./featureChampion"
import { FeatureCreate } from "./featureCreate"
import { FeatureInvite } from "./featureInvite"
import { FeaturePredict } from "./featurePredict"

export const FeaturesSection = () => {
	return (
		<div className="pb-16 px-2 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
			<FeatureCreate />
			<FeatureInvite />
			<FeaturePredict />
			<FeatureChampion />
		</div>
	)
}
