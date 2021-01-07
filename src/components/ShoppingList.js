import React from 'react'
import ShoppingItem from './ShoppingListItem'

export default function ShoppingList(props) {
  return (
    <ul>
      {props.items.map((item, i) =>
        <ShoppingItem
          key={i}
          item={item}
          onDeleteItem={props.onDeleteItem} // passed via props, uses the same name again for easy matching
          onCheckItem={props.onCheckItem} // (same as above comment)
        />
      )}
    </ul>
  )
}

ShoppingList.defaultProps = {
  items: []
}
