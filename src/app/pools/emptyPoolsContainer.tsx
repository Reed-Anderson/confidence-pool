import { Button } from "@components/button"
import { FaExclamationTriangle } from "react-icons/fa"

export const EmptyPoolsContainer = () => {
	return (
		<div className="w-fit px-4 m-auto h-96 flex flex-col gap-12 items-center justify-center">
			<h1 className="text-3xl flex items-center gap-2">
				<FaExclamationTriangle className="text-gray-600" />
				<span className="text-gray-800">No Pools To Display</span>
			</h1>
			<p className="text-gray-700">
				Use the buttons below to join an existing pool or create a new
				one
			</p>
			<div className="flex flex-col md:flex-row gap-4 w-full">
				<Button className="bg-gray-700 flex-grow text-white">
					Join Existing Pool
				</Button>
				<Button className="bg-gray-700 flex-grow text-white">
					Create New Pool
				</Button>
			</div>
		</div>
	)
}
