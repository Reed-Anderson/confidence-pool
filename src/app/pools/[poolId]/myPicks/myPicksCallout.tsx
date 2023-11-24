export const MyPicksCallout = () => {
  return (
    <div className="w-[36rem] m-auto bg-gray-50 border rounded-sm overflow-hidden p-2 pl-3 text-sm relative">
      <div className="w-1 h-full bg-green-400 absolute left-0 top-0" />
      <span className="items-center gap-1 text-gray-600">
        Week 1 picks are due <b>March 23, 2024</b> at <b>12:00 PM</b>. Your
        picks have already been submitted. Edits can be made until the due date.
      </span>
    </div>
  )
}
