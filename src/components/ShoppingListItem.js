import React from 'react'

/* class ShoppingListItem extends React.Component {
  render() {
    return (
      <li>
        <h2 style={{
          textDecoration: this.props.item.checked ? 'line-through' : null,
        }}>
          {this.props.item.name}
        </h2>
        <button onClick={this.props.onCheckItem}>check</button>
        <button onClick={this.props.onDeleteItem}>delete</button>
      </li>
    )
  }
} */

function ShoppingListItem(props) {
  return (
    <li>
      <h2 style={{
        textDecoration: props.item.checked ? 'line-through' : null,
      }}>
        {props.item.name}
      </h2>
      <button onClick={() => props.onCheckItem(props.item)}>check</button>
      <button onClick={() => props.onDeleteItem(props.item)} >delete</button>
    </li>
  )
}

ShoppingListItem.defaultProps = {
  item: {}
}

export default ShoppingListItem;