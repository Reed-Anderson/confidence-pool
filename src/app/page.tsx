import { Divider } from "@nextui-org/react"
import { FeaturesSection } from "./root/featuresSection"
import { HeroSection } from "./root/heroSection"

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <HeroSection />
        <Divider />
        <FeaturesSection />
      </main>
    </>
  )
}
