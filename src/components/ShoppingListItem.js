import React from 'react'

export default function ShoppingListItem(props) {
  return (
    <li>
      <h2 style={{
        textDecoration: props.item.checked ? 'line-through' : null,
      }}>
        {props.item.name}
      </h2>
      <button type='button'>check</button>
      <button type='button'>delete</button>
    </li>
  )
}

ShoppingListItem.defaultProps = {
  item: {}
}
