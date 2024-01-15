import { Banner } from "@components/banner"
import { ImageCard } from "@components/imageCard"
import { TileContainer } from "@components/tileContainer"
import { useSignInRequired } from "@src/lib/useSignInRequired"
import Link from "next/link"
import { AddPoolButton } from "./addPoolButton"
import { EmptyPoolsContainer } from "./emptyPoolsContainer"

export default async function PoolsPage() {
	await useSignInRequired()

	const pools = [
		{
			name: "Reed's Cool Pool",
			image: "/mls.png",
			id: 1
		}
	]
	return (
		<>
			<Banner title="My Pools" />
			<TileContainer className="pt-8 container m-auto">
				{pools.length > 0 && (
					<>
						{pools.map((pool) => (
							<Link key={pool.id} href={`/pools/${pool.id}`}>
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
