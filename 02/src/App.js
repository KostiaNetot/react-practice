import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header";
import PostsColumn from "./components/PostsColumn/PostsColumn";
import AuthorColumn from "./components/AuthorColumn/AuthorColumn";

class App extends Component {

  state = {
    selectedUsersId: 2
  };

  render() {
    return(
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <PostsColumn />
            <AuthorColumn userId={this.state.selectedUsersId} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
