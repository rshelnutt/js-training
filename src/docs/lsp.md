# Liskov Substitution Principle (LSP)

The Liskov Substitution Principle is the third principle in the SOLID design principles. The rough translation for functional programming is:

> Supertype components should be replaceable with instances of their subtypes without altering the correctness of that program.

In simpler terms, if you wrap a component like an `<input />` or a `<button />`, your new component should support all the features included with those (min, max, value, formtarget, etc). This principle ensures that a subclass (your component) can stand in for its superclass (the HTML element) without causing issues.

## Why LSP Matters

In JavaScript applications, the Liskov Substitution Principle helps create component hierarchies that are:

- **Predictable**: Components behave as expected when substituted
- **Maintainable**: Changes to derived components don't break existing code
- **Reusable**: Components can be safely used in different contexts
- **Testable**: Components can be tested in isolation and as substitutes

When components follow LSP, they become more reliable and can be composed together without unexpected side effects.

## Identifying Violations of LSP

Let's examine a component that violates the Liskov Substitution Principle:

```tsx
[[ Bad Example ]]

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
```

And you can see how the `NumberInput` component violates the Liskov Substitution Principle:

```tsx
[[ Bad Usage Example - Form.tsx ]]

const Form = () => {
  const [text, setText] = useState("")
  const [age, setAge] = useState(0) // Age is cast as a number instead of string

  // NumberInput breaks LSP, changing the type of the value passed to onChange
  return (
    <form>
      <Input label="Name" value={text} onChange={setText} />
      <NumberInput label="Age" value={age} onChange={setAge} />
    </form>
  )
}
```

### Problems with this implementation:

1. **Type inconsistency**: The `NumberInput` component changes the type of the value passed to `onChange` from string to number
2. **Behavior change**: The `NumberInput` component only calls `onChange` for valid numbers, unlike the base `Input`
3. **Contract violation**: The interface specifies that `onChange` should receive a string, but `NumberInput` passes a number
4. **Unexpected behavior**: Code that expects `onChange` to always be called with a string will break when using `NumberInput`

## Applying LSP: Preserving Behavior

Now let's look at a refactored version that follows the Liskov Substitution Principle:

```tsx
[[ Good Example ]]

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
```

```tsx
[[ Good Usage Example - Form.tsx ]]

const Form = () => {
  const [text, setText] = useState("")
  const [age, setAge] = useState("0") // Age retains the string value

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

  export default Form
}
```

### Improvements in this implementation:

1. **Consistent interface**: Both `Input` and `NumberInput` maintain the same interface
2. **Preserved behavior**: `NumberInput` doesn't change the behavior of the `onChange` handler
3. **Type safety**: The `value` and `onChange` types remain consistent across components
4. **Separation of concerns**: Any type conversion happens outside the component

## Practical Guidelines for Applying LSP in Components

1. **Maintain consistent props interfaces**: Derived components should accept the same props as their base components
2. **Preserve behavior**: Don't change the expected behavior of props or methods
3. **Respect type contracts**: Don't change the types of values passed to callbacks
4. **Use composition over inheritance**: When possible, compose components rather than extending them
5. **Process data outside components**: Handle data transformations in parent components or custom hooks
6. **Use TypeScript to enforce contracts**: Define clear interfaces for your components
7. **Test substitutability**: Ensure derived components can be used in place of base components

## Benefits of Following LSP

- **Predictable component behavior**: Components behave consistently when substituted
- **Safer refactoring**: Changes to base components won't break derived components
- **Better component reusability**: Components can be safely used in different contexts
- **Reduced bugs**: Fewer unexpected behaviors when substituting components
- **Improved maintainability**: Clearer component relationships and responsibilities

## Conclusion

The Liskov Substitution Principle is essential for creating reliable and maintainable component hierarchies. By ensuring that derived components can be substituted for their base components without changing behavior, you create a more predictable and robust application. Remember that LSP is not just about inheritance but about meeting the expectations set by component interfaces.