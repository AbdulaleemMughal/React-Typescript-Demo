import React from 'react';

type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
};

const List = <T extends string | number | { id: number}>({items, onClick}: ListProps<T>) => {
  return (
    <div>
      <h2>Item Lists</h2>
      {items.map((item, index) => {
        <div key={index} onClick={() => onClick(item)}>{item}</div>
      })}
    </div>
  )
}

export default List;
