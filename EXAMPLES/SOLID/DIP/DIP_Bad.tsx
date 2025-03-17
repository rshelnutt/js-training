import { useEffect, useState } from 'react'
import type { User } from'./DIP_Good/types/User'

// Bad example: Component directly depends on concrete implementation
const UserList = () => {
  const [users, setUsers] = useState([] as User[]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Direct dependency on API implementation
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;