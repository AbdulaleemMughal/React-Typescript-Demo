import React from 'react';

type InputProps = React.ConmpnentProps<'input'>;

const Input = (props: InputProps) => {
  return (
    <div>
      <input type='text' {...props} />
    </div>
  )
}

export default Input
