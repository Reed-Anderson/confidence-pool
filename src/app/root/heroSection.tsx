import { Button } from "@components/button"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="py-24 text-center text-slate-800">
      <h1 className="text-5xl flex gap-2 justify-center font-bold tracking-tight">
        Confidence Meets Competition
      </h1>
      <h2 className="p-8 text-lg">
        Create confidence pools for your favorite leagues, invite your friends,
        and make every game exciting!
      </h2>
      <Link
        href="/create"
        prefetch={true}
      >
        <Button
          className="bg-secondary text-white tracking-wide"
          tabIndex={-1}
        >
          Challenge Your Friends
        </Button>
      </Link>
    </section>
  )
}
