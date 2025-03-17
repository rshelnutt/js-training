# Single Responsibility Principle (SRP)

The Single Responsibility Principle is the first principle in the SOLID design principles. The rough translation for functional programming is:

> A function or component should only do one thing, and therefore should have only a single reason to change.

In simpler terms, a component, class, or function should do exactly one thing and have only one responsibility. When a component has multiple responsibilities, it becomes more difficult to maintain, test, and reuse.

## Why SRP Matters

In JavaScript applications, components can quickly become bloated with multiple responsibilities:

- Rendering UI
- Managing state
- Handling data formatting
- Processing business logic
- Managing side effects (API calls, analytics)

When a component handles too many concerns, it becomes:

- **Harder to understand**: New developers need more time to comprehend what the component does
- **Difficult to test**: Testing becomes complex when a component has multiple responsibilities
- **Challenging to reuse**: Components with multiple responsibilities are less reusable
- **Prone to bugs**: Changes to one aspect might inadvertently affect others

## Identifying Violations of SRP

Let's examine a component that violates the Single Responsibility Principle:

```tsx
[[ Bad Example ]]

// Component does too many things
// - Formats data
// - Handles UI display
// - Manages like functionality
// - Deals with analytics

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
```

### Problems with this implementation:

1. **Date formatting logic** is embedded in the component
2. **Analytics tracking** is directly handled within the component
3. **Like functionality** state and logic are mixed with the UI rendering
4. The component has **multiple reasons to change**:
   - If we need to change how dates are formatted
   - If analytics requirements change
   - If the UI design changes
   - If the like functionality behavior changes

## Applying SRP: Separating Concerns

Now let's look at a refactored version that follows the Single Responsibility Principle:

```tsx
[[ Good Example - UserCard.tsx ]]

// Component only handles UI rendering
// - Formatting logic extracted to utility function
// - Analytics logic extracted to custom hook
// - Like functionality extracted to separate component

import { formatDate } from './utils/formatDate'
import { useAnalytics } from './hooks/useAnalytics'
import LikeButton from './components/LikeButton'

const UserCard = ({ user }:{ user: UserModel }) => {
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

export default UserCard
```

```tsx
[[ Good Example - formatDate.ts ]]

export const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
```

```tsx
[[ Good Example - useAnalytics.tsx ]]

export const useAnalytics = () => {
  const trackEvent = (name: string, data: any) => {
    console.log(`Event tracked: ${name}`, data)
  }

  return { trackEvent }
}
```

```tsx
[[ Good Example - LikeButton.tsx ]]

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
```

### Improvements in the refactored version:

1. **Date formatting** is extracted to a utility function (`formatDate`)
2. **Analytics tracking** is moved to a custom hook (`useAnalytics`)
3. **Like functionality** is encapsulated in a dedicated component (`LikeButton`)
4. The main component now has a **single responsibility**: coordinating and rendering the UI

## Benefits of Following SRP

#### Improved Maintainability

When each component has a single responsibility, it's easier to understand and modify. If you need to change how dates are formatted, you only need to update the `formatDate` utility function, not the entire component.

#### Enhanced Testability

Components with a single responsibility are easier to test. You can test the date formatting logic independently from the UI rendering or analytics tracking.

#### Better Reusability

Extracted functionality can be reused across the application. The `formatDate` utility and `LikeButton` component can be used in other parts of the application.

#### Easier Collaboration

When components have clear, single responsibilities, multiple developers can work on different parts of the application without conflicts.

## Practical Guidelines for Applying SRP in Components

1. **Keep components focused on rendering UI**: Components should primarily handle rendering and coordinating child components

2. **Extract business logic to custom hooks**: Use custom hooks for data fetching, state management, and other non-UI logic

3. **Move utility functions outside components**: Date formatting, string manipulation, calculations should be in separate utility files

4. **Create specialized components for reusable UI patterns**: Buttons, form elements, cards should be their own components

5. **Use composition over inheritance**: Compose smaller, focused components to build complex UIs

6. **Follow the "Do One Thing Well" philosophy**: If you find yourself using "and" to describe what a component does, it might be doing too much

## Conclusion

The Single Responsibility Principle is a powerful tool for creating maintainable, testable, and reusable components. By separating concerns and ensuring each component has only one reason to change, you can build applications that are easier to understand, modify, and extend.

Remember that applying SRP is not about creating the smallest possible components, but about creating components with clear, focused responsibilities. The goal is to make your codebase more maintainable and adaptable to change.