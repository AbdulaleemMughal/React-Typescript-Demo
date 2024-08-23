import React from 'react';
import { PersonListProps } from './PersonList.types';

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {
        props.name.map((name) => {
            <h2 key={name.first}>{name.first} {name.last}</h2>
        })
      }
    </div>
  )
}

export default PersonList;
