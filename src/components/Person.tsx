import React from 'react';
import { Name } from './PersonList.types';

type PersonProps = {
    name: Name
}

const Person = (props: PersonProps ) => {
  return (
    <div>
      <h2>{props.name.first} {props.name.last}</h2>
    </div>
  )
}

export default Person;
