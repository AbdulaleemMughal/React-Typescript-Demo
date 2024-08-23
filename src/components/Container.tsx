import React from 'react';

type ContainerProps = {
    styles: React.CSSProperties
};

const Container = (props: ContainerProps) => {
  return (
    <div>
      <p style={props.styles}>
        This is a container component. It's used to wrap other components and provides a consistent layout.
        In this example, we have a paragraph inside a container.
      </p>
    </div>
  )
}

export default Container;
