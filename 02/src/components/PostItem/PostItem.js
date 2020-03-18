import React, { Component } from "react";
import './PostItem.css';

import ExtendedPostItem from "../ExtendedPostItem/ExtendedPostItem";

export default class PostItem extends Component {

  state = {
    extended: false,
    comments: null,
  };

  onItemClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      extended: !prevState.extended
    }));
  };

  render() {
    const { id, title } = this.props.post;
    const { extended } = this.state;

    if (extended) {
      return <ExtendedPostItem
                post={ this.props.post }
                onItemClick={ this.onItemClick }
      />
    }

    return (
      <a
        onClick={ this.onItemClick }
         href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{ `${id}: ${title}` }</h5>
        </div>
      </a>
    );
  }
}
