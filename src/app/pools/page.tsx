import Link from "next/link"
import { Banner } from "@components/banner"
import { ImageCard } from "@components/imageCard"
import { EmptyPoolsContainer } from "./emptyPoolsContainer"
import { AddPoolButton } from "./addPoolButton"
import { TileContainer } from "@components/tileContainer"

export default function PoolsPage() {
  const pools = [
    {
      name: "Reed's Cool Pool",
      image: "/mls.png",
      id: 1,
    },
  ]
  return (
    <>
      <Banner title="My Pools" />
      <TileContainer className="pt-8 container m-auto">
        {pools.length > 0 && (
          <>
            {pools.map((pool) => (
              <Link
                key={pool.id}
                href={`/pools/${pool.id}`}
              >
                <ImageCard
                  image={pool.image}
                  tabIndex={-1}
                  title={pool.name}
                />
              </Link>
            ))}
            <AddPoolButton />
          </>
        )}
        {pools.length === 0 && <EmptyPoolsContainer />}
      </TileContainer>
    </>
  )
}
