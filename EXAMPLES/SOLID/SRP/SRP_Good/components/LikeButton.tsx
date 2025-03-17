import { useState } from 'react'

const LikeButton = ({ onToggle }:{ onToggle: (isLiked: boolean) => void }) => {
  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () => {
    const newIsLiked = !isLiked
    setIsLiked(newIsLiked)
    onToggle(newIsLiked)
  }

  return <button onClick={handleClick}>{isLiked ? 'Unlike' : 'Like'}</button>
}

export default LikeButton
