/*
  Bad Example: Not open for extension, not closed for modification
  To add a new button type, we must modify this component
*/

type ButtonProps = {
  onClick: () => void
  children?: React.ReactNode
  type: 'primary' | 'secondary' | 'danger' | 'outline' | 'success' | 'default'
}

const Button = ({ type, onClick, children }:ButtonProps) => {
  // Component has to be modified for each new button type
  if (type === 'primary') {
    return (
      <button
        onClick={onClick}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {children}
      </button>
    )
  } else if (type === 'secondary') {
    return (
      <button
        onClick={onClick}
        className="bg-gray-300 text-gray-800 py-2 px-4 rounded"
      >
        {children}
      </button>
    )
  } else if (type === 'danger') {
    return (
      <button
        onClick={onClick}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        {children}
      </button>
    )
  } else if (type === 'outline') {
    // If we need a new type, we have to modify this component
    return (
      <button
        onClick={onClick}
        className="border border-blue-500 text-blue-500 py-2 px-4 rounded"
      >
        {children}
      </button>
    )
  }

  // Default case
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 text-gray-800 py-2 px-4 rounded"
    >
      {children}
    </button>
  )
}

export default Button
