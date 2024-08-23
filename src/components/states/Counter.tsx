import React, { useReducer } from 'react';
import { CounterState, CounterAction } from './User.types';

const initialstate = {
    count: 0
};

function reducer (state: CounterState, action: CounterAction)  {
    switch(action.type) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
          return initialstate
        default:
            return state;
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment', pyload: 10})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement', pyload: 10})}>Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default Counter
