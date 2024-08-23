import React from 'react';

type HorizantalPosition = 'left' | 'right' | 'center';
type VerticalPosition = 'top' | 'bottom' | 'center';

type ToastProps = {
  position: Exclude<`${HorizantalPosition}-${VerticalPosition}`, 'center-center'> | 'center';
};

const Toast = ({position}: ToastProps) => {
  return (
    <div>
      <h1>toast Notification - {position}</h1>
    </div>
  )
}

export default Toast
