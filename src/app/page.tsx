import { FeaturesSection } from "./root/featuresSection"
import { HeroSection } from "./root/heroSection"

export default function Home() {
	return (
		<div className="container mx-auto">
			<HeroSection />
			<FeaturesSection />
		</div>
	)
}
