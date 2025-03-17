import useUsers from "./composables/useUsers"
import type { User } from "./types/User"

// Good example: Component depends on abstractions, not concrete implementations
const UserList = ({ users, loading, error }:{ users: User[], loading: boolean, error: any }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: { error }</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

// Example usage - parent component handles data fetching
const UserListContainer = () => {
  const { users, loading, error } = useUsers();
  
  return <UserList users={users} loading={loading} error={error} />;
};




export { UserList, UserListContainer };