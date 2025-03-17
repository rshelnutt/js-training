import type { CardImageProps } from "../types/Card"

// Optional Card Image component
const CardImage = ({ src, alt }: CardImageProps) => (
  <img src={src} alt={alt} className="card-image" />
)

export default CardImage
