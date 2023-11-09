export const SupportedLeaguesFallback = () => {
  const arr = [1, 2, 3]
  return arr.map((val) => (
    <div
      key={val}
      className="rounded-md shadow-md hover:shadow-lg cursor-pointer
            bg-gradient-to-b from-white to-gray-200 opacity-80 hover:scale-105 border"
    >
      <div className="h-52 flex items-center"></div>
      <h1 className="p-4 bg-gray-50 border-t text-sm flex justify-between items-center">
        <span className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48" />
      </h1>
    </div>
  ))
}
