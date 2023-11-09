import { PrismaClient } from "@prisma/client"
import { unstable_cache } from "next/cache"
import { FaAngleRight } from "react-icons/fa"
import Image from "next/image"

const prisma = new PrismaClient()

export const SupportedLeagues = async () => {
  const cacheGetSupportedLeagues = unstable_cache(
    () =>
      prisma.supportedLeague.findMany({
        orderBy: {
          name: "asc",
        },
      }),
    ["GetSupportedLeagues"],
    {
      tags: ["SupportedLeagues"],
    },
  )

  const supportedLeauges = await cacheGetSupportedLeagues()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      {supportedLeauges.map((league) => (
        <div
          key={league.id}
          className="group rounded-md shadow-md hover:shadow-lg cursor-pointer
            bg-gradient-to-b from-white to-gray-200 opacity-80 hover:scale-105 border"
        >
          <div className="h-52 flex items-center">
            <Image
              className="m-auto p-4"
              src={league.logo}
              alt={`${league.name} Logo`}
              height={200}
              width={200}
            />
          </div>
          <h1 className="p-4 bg-gray-50 border-t text-sm flex justify-between items-center">
            <span>{league.name}</span>
            <FaAngleRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </h1>
        </div>
      ))}
    </div>
  )
}
