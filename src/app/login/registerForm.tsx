"use client"
import { Button } from "@components/button"
import { LabeledTextInput } from "@components/labeledTextInput"
import { useState } from "react"
import * as Tabs from "@radix-ui/react-tabs"

export const RegisterForm = () => {
  const [confirmPassword, setConfirmPassword] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Tabs.Content className="gap-8 flex flex-col" value="Register">
      <LabeledTextInput
        inputId="email"
        label="Email"
        onChange={setEmail}
        value={email}
      />
      <LabeledTextInput
        inputId="displayName"
        label="Display Name"
        onChange={setDisplayName}
        value={displayName}
      />
      <LabeledTextInput
        inputId="password"
        label="Password"
        onChange={setPassword}
        textInputProps={{ type: "password" }}
        value={password}
      />
      <LabeledTextInput
        inputId="confirmPassword"
        label="Confirm Password"
        onChange={setConfirmPassword}
        textInputProps={{ type: "password" }}
        value={confirmPassword}
      />
      <Button className="bg-gray-800 text-white">Register</Button>
    </Tabs.Content>
  )
}
