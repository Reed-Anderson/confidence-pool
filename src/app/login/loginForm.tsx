"use client"
import { Button } from "@components/button"
import { LabeledTextInput } from "@components/labeledTextInput"
import { useState } from "react"
import * as Tabs from "@radix-ui/react-tabs"

export const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Tabs.Content className="gap-8 flex flex-col" value="LogIn">
      <LabeledTextInput
        inputId="email"
        label="Email"
        onChange={setEmail}
        value={email}
      />
      <LabeledTextInput
        inputId="password"
        label="Password"
        onChange={setPassword}
        textInputProps={{ type: "password" }}
        value={password}
      />
      <Button className="bg-gray-800 text-white">Log In</Button>
    </Tabs.Content>
  )
}
