import React, {useContext} from 'react';
import { UserContext } from './UserContext';

const User = () => {

    const userContext = useContext(UserContext);

    const handleLoggedIn = () => {
        if(userContext){
            userContext.setUser({
                name: 'John Doe',
                email: 'johndoe@example.com'
            })
        }
    };

    const handleLoggedOut = () => {
        if(userContext){
            userContext.setUser(null);
        }
    };

  return (
    <div>
      <button onClick={handleLoggedIn}>Logged In</button>
      <button onClick={handleLoggedOut}>Logged Out</button>
      <p>User Name is {userContext?.user?.name}</p>
      <p>User Email is {userContext?.user?.email}</p>
    </div>
  )
}

export default User;
