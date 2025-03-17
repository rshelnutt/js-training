import { useState, type InputHTMLAttributes } from "react"

// Base Input component
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string
  onChange: (value: string) => void
  label: string
}

const Input = ({ value, onChange, label, type = "text", ...rest }: InputProps) => (
  <div>
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  </div>
)

// Derived component that preserves LSP
const NumberInput = (props: InputProps) => {
  // Keeps the same interface, no change in behavior
  // Any post-processing happens outside the component
  return <Input {...props} type="number" />
}

// Usage example
const Form = () => {
  const [text, setText] = useState("")
  const [age, setAge] = useState("0")

  // Processing happens outside the component, maintaining LSP
  const handleAgeChange = (value: string) => {
    setAge(value) // Preserves the string value for the input
  }

  return (
    <form>
      <Input label="Name" value={text} onChange={setText} />
      <NumberInput label="Age" value={age} onChange={handleAgeChange} />
    </form>
  )
}

export default Form
