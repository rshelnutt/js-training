import type { CardButtonProps } from "../types/Card"

// Optional Card Button component
const CardButton = ({ text, onClick }: CardButtonProps) => (
  <button onClick={onClick} className="card-button">
    {text}
  </button>
)

export default CardButton
