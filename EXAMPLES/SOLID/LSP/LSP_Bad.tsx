import { useState, type InputHTMLAttributes } from "react"

// Base Input component
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string
  onChange: (value: string) => void
  label: string
}

const Input = ({ value, onChange, label }: InputProps) => (
  <div>
    <label>{label}</label>
    <input value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
)

// Derived component that breaks LSP by changing the onChange behavior
const NumberInput = ({ value, onChange, label }: InputProps) => (
  <div>
    <label>{label}</label>
    <input
      type="number"
      value={value}
      // Violates LSP: Changes contract by parsing the string value to an integer
      onChange={(e) => {
        const num = parseInt(e.target.value)
        if (!isNaN(num)) onChange(num) // Only calls onChange for valid numbers
      }}
    />
  </div>
)

// Usage example
const Form = () => {
  const [text, setText] = useState("")
  const [age, setAge] = useState(0)

  return (
    <form>
      <Input label="Name" value={text} onChange={setText} />
      <NumberInput label="Age" value={age} onChange={setAge} />
    </form>
  )
}

export default Form
