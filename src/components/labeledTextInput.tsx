"use client"
import { useState } from "react"
import { TextInput, TextInputProps } from "./textInput"
import classNames from "classnames"

interface LabeledTextInputProps {
  inputId: string
  label: string
  onChange: (val: string) => void
  textInputProps?: TextInputProps
  value: string
}

export const LabeledTextInput = (props: LabeledTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const labelType = !!props.value || isFocused ? "label" : "placeholder"
  return (
    <div className="relative">
      <label
        className={classNames(
          "absolute block font-light",
          "pointer-events-none",
          "transition-all",
          {
            "bg-white text-gray-600 px-2 text-xs": labelType === "label",
            "-top-2 left-1 z-10": labelType === "label",
          },
          {
            "text-gray-500 top-2 left-2": labelType === "placeholder",
          },
        )}
        htmlFor={props.inputId}
      >
        {props.label}
      </label>
      <TextInput
        id={props.inputId}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => props.onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        value={props.value}
        {...props.textInputProps}
      />
    </div>
  )
}
