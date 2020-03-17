import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header";
import PostsColumn from "./components/PostsColumn/PostsColumn";

class App extends Component {

  render() {
    return(
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <PostsColumn />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
