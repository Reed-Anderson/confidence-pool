import classNames from "classnames"
import { Metadata } from "next"
import { PropsWithChildren } from "react"
import { GeistSans } from "geist/font"
import { TopNavBar } from "@src/app/navbar/navbar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={classNames(
          GeistSans.className,
          "h-screen",
          "bg-gradient-to-b",
          "from-sky-50",
          "to-gray-100",
          "overflow-hidden",
        )}
      >
        <TopNavBar />
        <main className="mx-auto h-[calc(100%-64px)] overflow-auto">
          {props.children}
        </main>
      </body>
    </html>
  )
}
