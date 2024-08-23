import React, {useState} from 'react';
import { AuthUser } from './User.types';

const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name: 'John Doe',
            email: 'johndoe@example.com'
        })
    };

    const handleLogout = () => {
        setUser(null);
    };

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      <div>Name is {user?.name}</div>
      <div>Email is {user?.email}</div>
    </div>
  )
}

export default User;
