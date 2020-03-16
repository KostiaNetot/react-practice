import React, { Component } from "react";
import './ItemRow.css';

class ItemRow extends Component{

  render() {

    const { id, name, category, price, quantity } = this.props.item;

    return (
      <tr className="table-light">
        <td>{ name }</td>
        <td>{ category }</td>
        <td><span>{ price }</span>$</td>
        <td>{ quantity }</td>
        <td>
          <button
            onClick={ () => this.props.onItemDelete(id) }
            className="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    )
  }
}

export default ItemRow;
