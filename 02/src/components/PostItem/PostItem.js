import React, { Component } from "react";
import './PostItem.css';


class PostItem extends Component {

  render() {
    return (
      <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Post title</h5>
        </div>
      </a>
    );
  }
}

export default PostItem;
