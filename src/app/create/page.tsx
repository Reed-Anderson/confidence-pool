import { Banner } from "./banner"
import { LeagueSelection } from "./leagueSelection"

export const dynamic = "force-dynamic"
export default async function CreatePage() {
  return (
    <>
      <Banner />
      <div className="container pb-8 m-auto">
        <LeagueSelection />
        <div className="flex gap-8">
          <div className="w-1/2">
            <h2 className="py-5 font-semibold">Correct Score Bonus</h2>
            <div className="h-20">
              <input
                className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                type="radio"
              />
              <div>Reed</div>
              <input type="radio" />
              <input type="radio" />
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="py-5 font-semibold">Missing Picks Policy</h2>
            <div className="border h-20 bg-white">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="radioButton"
                  name="radioGroup"
                  className="hidden"
                />
                <label
                  htmlFor="radioButton"
                  className="cursor-pointer flex items-center space-x-2 text-gray-700"
                >
                  <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full hidden"></div>
                  </div>
                  <span>Option 1</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
