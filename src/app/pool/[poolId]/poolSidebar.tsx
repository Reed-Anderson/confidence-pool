import { SidebarLink } from "./sidebarLink"

export const PoolSidebar = () => {
  return (
    <div className="h-full w-64 flex flex-col py-4">
      <SidebarLink isSelected title="Overview" />
      <SidebarLink title="My Picks" />
      <SidebarLink title="Standings" />
      <SidebarLink title="Weekly Results" />
    </div>
  )
}
