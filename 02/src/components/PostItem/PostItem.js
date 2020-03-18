import React, { Component } from "react";
import './PostItem.css';

import ExtendedPostItem from "../ExtendedPostItem/ExtendedPostItem";
// import BlogService from "../../services/BlogService";

export default class PostItem extends Component {
  // blogService = new BlogService();

  state = {
    extended: false,
    comments: null,
  };

  // getPostsComments(id) {
  //   this.blogService
  //     .getComments(id)
  //     .then(comments => {
  //       this.setState({
  //         comments: comments
  //       });
  //     });
  // }

  onItemClick = (e) => {
    e.preventDefault();
    const { id } = this.props.post;
    this.setState(prevState => ({
      extended: !prevState.extended
    }));
  };

  render() {
    const { id, title } = this.props.post;
    const { extended } = this.state;

    if (extended) {
      return <ExtendedPostItem
                // comments={this.state.comments}
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
