export interface NavbarMenuMobileOptionProps {
  href: string
  title: string
}

export const NavbarMenuMobileOption = (props: NavbarMenuMobileOptionProps) => {
  return <div className="p-5">{props.title}</div>
}
