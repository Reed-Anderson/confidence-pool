"use client"
import * as Tabs from "@radix-ui/react-tabs"
import { LoginForm } from "./loginForm"
import { RegisterForm } from "./registerForm"
import { useQueryState } from "next-usequerystate"
import classNames from "classnames"

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useQueryState("register")
  const action = isRegistering ? "Register" : "LogIn"

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Tabs.Root value={action}>
        <Tabs.List className="border border-b-0 bg-white shadow-sm">
          <Tabs.Trigger
            className={classNames("border-r p-4 w-1/2", {
              "font-bold": action === "LogIn",
              "bg-gray-50 border-b hover:font-semibold": action !== "LogIn",
            })}
            onClick={() => setIsRegistering(null)}
            value="LogIn"
          >
            Log In
          </Tabs.Trigger>
          <Tabs.Trigger
            className={classNames("p-4 w-1/2", {
              "font-bold": action === "Register",
              "bg-gray-50 border-b hover:font-semibold": action !== "Register",
            })}
            onClick={() => setIsRegistering("True")}
            value="Register"
          >
            Register
          </Tabs.Trigger>
        </Tabs.List>
        <div className="h-96">
          <div className="bg-white border border-t-0 p-8">
            <LoginForm />
            <RegisterForm />
          </div>
        </div>
      </Tabs.Root>
    </div>
  )
}
