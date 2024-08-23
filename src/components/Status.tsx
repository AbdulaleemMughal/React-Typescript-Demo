import React from 'react';

type StatusProps = {
    status: 'loading' | 'fetching' | 'error';
  };

const Status = (props: StatusProps) => {

    let message;
    if(props.status === 'loading') {
        message = 'Loading...';
    } else if(props.status === 'fetching'){
        message = 'Fetching data...';
    } else if(props.status === 'error') {
        message = 'Error fetching data...';
    }

  return (
    <div>
        <h2>Status - {message}</h2>
    </div>
  )
}

export default Status;
