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

export const NavbarMenuDesktop = (props: NavbarMenuProps) => {
  return (
    <Root>
      <Trigger className="hidden md:flex" aria-label={props.ariaLabel}>
        {props.children}
      </Trigger>
      <Portal>
        <Content className="bg-red-500">
          <Item>Reed</Item>
          <Item>Reed</Item>
          <Item>Reed</Item>
          <Item>Reed</Item>
          <Arrow className="fill-red-500" />
        </Content>
      </Portal>
    </Root>
  )
}
