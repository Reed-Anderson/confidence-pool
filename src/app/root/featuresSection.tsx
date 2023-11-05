import { Chip } from "@nextui-org/react"
import { FeatureCard } from "./featureCard"
import {
  FaCalendarPlus,
  FaEnvelope,
  FaHatWizard,
  FaTrophy,
} from "react-icons/fa"

export const FeaturesSection = () => {
  return (
    <section className="pb-16 px-2 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 leading-loose">
      <FeatureCard iconElement={<FaCalendarPlus />} title="Create Your Pool">
        <p>Create a Confidence Pool for your favorite league below:</p>
        <ul className="p-2">
          <li className="p-1">
            <span className="mr-2">NFL</span>
            <Chip color="primary" size="sm" variant="flat">
              Coming Aug 2024!
            </Chip>
          </li>
          <li className="p-1">
            <span className="mr-2">MLS</span>
            <Chip color="primary" size="sm" variant="flat">
              Coming Feb 2024!
            </Chip>
          </li>
          <li className="p-1">And more coming soon!</li>
        </ul>
      </FeatureCard>
      <FeatureCard iconElement={<FaEnvelope />} title="Invite Your Friends">
        <p>
          Gather your crew for a thrilling sports showdown. Bring friends on
          board, create your pick&apos;em pool, and get ready to compete.
        </p>
      </FeatureCard>
      <FeatureCard iconElement={<FaHatWizard />} title="Make Your Predictions">
        <p>
          Put your sports knowledge to the test. Predict game outcomes with
          confidence, strategize your picks, and watch your skills shine.
        </p>
      </FeatureCard>
      <FeatureCard iconElement={<FaTrophy />} title="Become A Champion">
        <p>
          Rise to the top of the leaderboard. Conquer your friends and rivals,
          and claim your place as the ultimate sports prediction champion.
        </p>
      </FeatureCard>
    </section>
  )
}
