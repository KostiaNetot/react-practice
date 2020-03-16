import React, { Component } from "react";
import './NewItemForm.css'

class NewItemForm extends Component {
  state = {
    name: "",
    category: "",
    price: "",
    quantity: ""
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = (e) => {
    const { addNewItem } = this.props;
    e.preventDefault();
    addNewItem(this.state);
    this.setState({
        name: "",
        category: "",
        price: "",
        store: ""
    });
    e.target.reset();
  };

  render() {

    return (
      <form
        onSubmit={this.onFormSubmit}
        className="form-inline">
        <div className="form-group">
          <input
            onChange={this.onInputChange}
            name="name"
            type="text"
            className="form-control"
            placeholder="Name"
            id="itemName"/>
        </div>

        <div className="form-group">
          <select
            name="category"
            onChange={this.onInputChange}
            className="custom-select">
            <option defaultValue="">Select category</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Butchery">Butchery</option>
            <option value="Grocery">Grocery</option>
          </select>
        </div>

        <div className="form-group row">
          <input
            onChange={this.onInputChange}
            name="price"
            type="text"
            className="form-control"
            placeholder="Price"
            id="itemPrice"/>
        </div>

        <div className="form-group row">
          <input
            onChange={this.onInputChange}
            name="quantity"
            type="number"
            className="form-control"
            placeholder="Quantity"
            id="itemQuantity"/>
        </div>

        <div className="form-group row">
          <button
            type="submit"
            className="btn btn-success">Add item</button>
        </div>
      </form>
    )
  }
}

export default NewItemForm;
