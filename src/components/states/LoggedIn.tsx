import React from 'react';
import { useState } from 'react';

const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      <div>User is {isLoggedIn ? 'Logged In' : 'Logged Out'}</div>
    </div>
  )
}

export default LoggedIn;
