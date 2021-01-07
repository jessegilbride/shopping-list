import React from 'react';

class AddItemForm extends React.Component {
  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onAddItem(event.target.itemToAdd.value); // term after event.target must match name value coming from form input
  }
  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <input
          name='itemToAdd'
          type='text'
          placeholder='carrots'
          aria-label='Shopping list item'
        />
        <button type='submit'>Add Item</button>
      </form>
    )
  }
}

export default AddItemForm