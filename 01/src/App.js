import React, { Component } from 'react';
import './App.css';

import ItemsTable from "./components/ItemsTable/ItemsTable";
import NewItemForm from "./components/NewItemForm/NewItemForm";

class App extends Component {

  state = {
    items: [
      {
        id: 584273467904,
        name: "Milk",
        category: "Dairy",
        price: 1.5,
        quantity: 21
      },
      {
        id: 1584273616978,
        name: "Bread",
        category: "Bakery",
        price: 1,
        quantity: 14
      },
      {
        id: 1584273689368,
        name: "Steak",
        category: "Butchery",
        price: 9,
        quantity: 12
      },
      {
        id: 1584273743729,
        name: "Pasta",
        category: "Grocery",
        price: 0.8,
        quantity: 33
      },
    ],
  };

  onItemDelete = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updatedItems });
  };

  addNewItem = (newItemObj) => {
    const { items } = this.state;
    const updatedItems = [
      ...items,
      {
        id: Date.now(),
        ...newItemObj
      }
    ];
    this.setState({
      items: updatedItems
    });
  };

  render() {
    return (
      <div className="container">

        <h1>Product list<br/> <span>Kostia, 01-task</span></h1>

        <ItemsTable
          items={this.state.items}
          onItemDelete={this.onItemDelete}
        />

        <NewItemForm
          addNewItem={this.addNewItem}
        />
      </div>
    )
  }
}

export default App;
