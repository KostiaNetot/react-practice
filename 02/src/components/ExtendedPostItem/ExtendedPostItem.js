import React, { Component } from "react";
import './ExtendedPostItem.css';

import BlogService from "../../services/BlogService";


export default class ExtendedPostItem extends Component {
  blogService = new BlogService();

  componentDidMount() {
    console.log(this.props);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.comments !== prevProps.comments) {
  //     const { comments } = this.props;
  //     this.renderComments(comments);
  //   }
  // }

  // renderComments = (arr) => {
  //
  // };

  render() {
    const { post, onItemClick } = this.props;

    return(
      <a onClick={ onItemClick } href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{ `${post.id}: ${post.title}` }</h5>
        </div>
        <p className="post-body mb-1">{ post.body }</p>
        <div className="comments-wrapper">
          <small>laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam
            autem quasi\nreiciendis et nam sapiente accusantium</small>
        </div>
      </a>
    )
  }
}
