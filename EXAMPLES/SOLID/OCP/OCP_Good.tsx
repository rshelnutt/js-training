/*
  Good Example: Open for extension, closed for modification
  New button types can be added without modifying this component
*/

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'success' | 'default'
  className?: string
}

const Button = ({ onClick, children, variant = 'default', className = '' }:ButtonProps) => {
  // Button styles are externalized into a mapping object
  // To add a new variant, just extend this mapping
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
    success: 'bg-green-500 text-white hover:bg-green-600', // Add new types without changing component
    default: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  }

  // Get variant style or default if not found
  const variantStyle = variantStyles[variant] || variantStyles.default

  // Combine standard button styles with variant-specific styles and custom classes
  const buttonClasses = `py-2 px-4 rounded transition-colors ${variantStyle} ${className}`

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  )
}

// Example usage:
// <Button variant="primary">Click Me</Button>
// <Button variant="outline" className="w-full">Full Width Outline</Button>
// <Button variant="success">Success Button</Button> - New type with no component changes

export default Button
