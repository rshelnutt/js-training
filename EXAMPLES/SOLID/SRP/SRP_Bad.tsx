import { useState } from 'react'

// Bad example: Component does too many things
// - Formats data
// - Handles UI display
// - Manages like functionality
// - Deals with analytics

type UserModel = {
  id: number
  name: string
  avatar: string
  joinDate: Date
}

const UserCard = ({ user }:{ user: UserModel }) => {
  const [isLiked, setIsLiked] = useState(false)

  // Formatting logic mixed with component
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  // Analytics tracking mixed with UI logic
  const handleLike = () => {
    setIsLiked(!isLiked)

    // Analytics tracking directly in component
    trackEvent('user_liked', {
      userId: user.id,
      timestamp: new Date().toISOString(),
    })
  }

  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>Member since: {formatDate(user.joinDate)}</p>
      <button onClick={handleLike}>{isLiked ? 'Unlike' : 'Like'}</button>
    </div>
  )
}

// Mock analytics function
const trackEvent = (name: string, data: any) => {
  console.log(`Event tracked: ${name}`, data)
}

export default UserCard
