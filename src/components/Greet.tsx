import React from 'react';

type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
        {
            props.isLoggedIn ? <h2>{props.name}, There is {props.messageCount} new notifications</h2> : <h2>Please logged in</h2>
}
      
    </div>
  )
}

export default Greet;
