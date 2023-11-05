import { FeatureCard } from "./featureCard"
import {
  FaCalendarPlus,
  FaEnvelope,
  FaHatWizard,
  FaTrophy,
} from "react-icons/fa"

export const FeaturesSection = () => {
  return (
    <section className="text-center p-6 flex flex-wrap gap-5 justify-around">
      <FeatureCard iconElement={<FaCalendarPlus />} title="Create Your Pool" />
      <FeatureCard iconElement={<FaEnvelope />} title="Invite Your Friends" />
      <FeatureCard
        iconElement={<FaHatWizard />}
        title="Make Your Predictions"
      />
      <FeatureCard iconElement={<FaTrophy />} title="Become A Champion" />
    </section>
  )
}
