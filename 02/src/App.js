import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header";
import PostsColumn from "./components/PostsColumn/PostsColumn";
import AuthorColumn from "./components/AuthorColumn/AuthorColumn";

class App extends Component {

  state = {
    selectedUsersId: null
  };

  onItemSelected = (id) => {
    this.setState({
      selectedUsersId: id
    });
  };

  render() {
    return(
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <PostsColumn onItemSelected={this.onItemSelected} />
            <AuthorColumn
              userId={this.state.selectedUsersId} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
