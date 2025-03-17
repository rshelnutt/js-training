export interface CardProps extends React.PropsWithChildren {
  title: string
  description: string
}

interface CardImageProps extends Partial<HTMLImageElement> {
  src: string;
  alt: string;
}

interface CardButtonProps extends Partial<HTMLButtonElement> {
  text: string;
  onClick: () => void;
}