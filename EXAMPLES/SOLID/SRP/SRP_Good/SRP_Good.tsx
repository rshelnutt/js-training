import { formatDate } from './utils/formatDate'
import { useAnalytics } from './hooks/useAnalytics'
import LikeButton from './components/LikeButton'

// Good example: Component only handles UI rendering
// - Formatting logic extracted to utility function
// - Analytics logic extracted to custom hook
// - Like functionality extracted to separate component

type UserModel = {
  id: number
  name: string
  avatar: string
  joinDate: Date
}

export default ({ user }:{ user: UserModel }) => {
  const { trackEvent } = useAnalytics()

  // Event handler only handles coordinating between concerns
  const handleLikeToggle = (isLiked: boolean) => {
    trackEvent('user_liked', {
      userId: user.id,
      isLiked,
      timestamp: new Date().toISOString(),
    })
  }

  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>Member since: {formatDate(user.joinDate)}</p>
      <LikeButton onToggle={handleLikeToggle} />
    </div>
  )
}
