"use client"
import { SidebarLink, View } from "./sidebarLink"

export const PoolSidebar = () => {
  return (
    <div className="h-full w-64 flex gap-1 flex-col py-4">
      <SidebarLink
        title="My Picks"
        view={View.MyPicks}
      />
      <SidebarLink
        title="Standings"
        view={View.Standings}
      />
      <SidebarLink
        title="Weekly Results"
        view={View.WeeklyResults}
      />
      <SidebarLink
        title="Settings"
        view={View.Settings}
      />
    </div>
  )
}
