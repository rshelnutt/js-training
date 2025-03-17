
type CardProps = {
  title: string;
  subtitle: string | null;
  imageUrl: string | null;
  imageAlt: string | null;
  description: string;
  buttonText: string | null;
  onButtonClick: () => void;
  showImage: boolean;
  showButton: boolean;
};

// Bad example: Component requires too many props, most are unused in simple cases
const Card = ({ 
  title, 
  subtitle,
  imageUrl,
  imageAlt,
  description,
  buttonText,
  onButtonClick,
  showImage = true,
  showButton = true 
}: CardProps) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
      
      {showImage && imageUrl && (
        <img src={imageUrl} alt={imageAlt || title} />
      )}
      
      <p>{description}</p>
      
      {showButton && buttonText && (
        <button onClick={onButtonClick}>{buttonText}</button>
      )}
    </div>
  );
};

// Usage example - simple use case has to provide many unused props
const SimpleUsage = () => (
  <Card
    title="Welcome"
    description="This is a simple card"
    // This data can still be passed, even if not being used
    subtitle={null}
    imageUrl={null}
    imageAlt={null}
    buttonText={null}
    onButtonClick={() => {}}
    showImage={false}
    showButton={false}
  />
);

export default SimpleUsage;