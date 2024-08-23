import React, {useState, useEffect, useRef} from 'react';

const MutualRef = () => {

    const [timer, setTimer] = useState(0);
    const interVaRef = useRef<number | null>(null);

    const stopTimer = () => {
        window.clearTimeout(interVaRef.current);
    };

    useEffect(() => {
        interVaRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            stopTimer();
        }
    });

  return (
    <div>
      <h2>HookTime - {timer}</h2>
      <button onClick={() => stopTimer()} >Stop Timer</button>
    </div>
  )
}

export default MutualRef
