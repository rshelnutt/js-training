import CardImage from "./components/CardImage"
import CardButton from "./components/CardButton"

import type { CardProps } from "./types/Card"

// Basic Card with minimal required props
const Card = ({ title, description, children }: CardProps) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
    {children}
  </div>
)

// Usage example - simple use case only needs to provide what it uses
const SimpleUsage = () => (
  <Card title="Welcome" description="This is a simple card" />
)

// Usage example - complex use case can compose what it needs
const ComplexUsage = () => (
  <Card title="Featured Product" description="This is our best product">
    <CardImage src="/product.jpg" alt="Product" />
    <CardButton text="Buy Now" onClick={() => console.log("clicked")} />
  </Card>
)

export default { SimpleUsage, ComplexUsage }
