import React, { Component } from "react";
import './PostItem.css';

import ExtendedPostItem from "../ExtendedPostItem/ExtendedPostItem";
import BlogService from "../../services/BlogService";

export default class PostItem extends Component {
  blogService = new BlogService();

  state = {
    extended: false,
    // clicked: false,
    comments: []
  };

  getPostsComments() {
    this.blogService
      .getComments(1)
      .then(comments => {
        console.log(comments);
      });
  }

  onItemClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      extended: !prevState.extended
    }));
  };

  render() {

    const { title } = this.props.post;
    const { extended } = this.state;
    console.log(this.props.post);

    if (extended) {

      return <ExtendedPostItem
                post={ this.props.post }
                onItemClick={ this.onItemClick } />
    }

    return (
      <a onClick={ this.onItemClick } href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{ title }</h5>
        </div>
      </a>
    );
  }
}
