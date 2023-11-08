"use client"
import {
  Trigger,
  Portal,
  Content,
  Item,
  Arrow,
  Root,
} from "@radix-ui/react-dropdown-menu"
import { NavbarMenuProps } from "./navbarMenu"
import { Divider } from "@components/divider"

export const NavbarMenuDesktop = (props: NavbarMenuProps) => {
  return (
    <Root>
      <Trigger className="hidden md:flex" aria-label={props.ariaLabel}>
        {props.children}
      </Trigger>
      <Portal>
        <Content className="p-2 bg-white rounded-sm">
          {props.options.map((option, index) => (
            <>
              {index > 0 && <Divider />}
              <a href={option.href}>
                <Item
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                  key={option.title}
                >
                  {option.startContent}
                  {option.title}
                </Item>
              </a>
            </>
          ))}
          <Arrow className="fill-white" />
        </Content>
      </Portal>
    </Root>
  )
}
