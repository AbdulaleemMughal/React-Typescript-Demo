import React from 'react';

type HeadingProps = {
    children: string
};

const Heading = (props: HeadingProps) => {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  )
}

export default Heading;
