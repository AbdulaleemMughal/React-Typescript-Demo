import React from 'react';
import Greet from '../Greet';


// Let extract al the props of the other component for example: Greet Component
// This is not nessecary but we have to know that...
const CustomComponent = (props: React.ConmpnentProps<typeof Greet>) => {
  return (
    <div>
      {props.isLoggedIn}
    </div>
  )
}

export default CustomComponent
