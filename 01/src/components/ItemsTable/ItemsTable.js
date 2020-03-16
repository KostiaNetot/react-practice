import React, { Component } from "react";
import './ItemsTable.css';

import ItemRow from "../ItemRow/ItemRow";

class ItemsTable extends Component {

  renderItemsRows() {
    return this.props.items.map(item => {
      return <ItemRow
                key={item.id}
                item={item}
                onItemDelete={ this.props.onItemDelete } />
    })
  }

  render() {

    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Action</th>
        </tr>
        </thead>

        <tbody>
        { this.renderItemsRows() }

        </tbody>
      </table>
    )
  }
}

export default ItemsTable;
