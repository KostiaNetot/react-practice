import React, { Component } from "react";
import './ExtendedPostItem.css';

import BlogService from "../../services/BlogService";
import Loader from "../Loader/Loader";


export default class ExtendedPostItem extends Component {

  state = {
    commentsLoading: true,
    comments: null
  };

  blogService = new BlogService();

  componentDidMount() {
    const { id } = this.props.post;
    this.getPostsComments(id);
  }

  getPostsComments(id) {
    this.blogService
      .getComments(id)
      .then(comments => {
        this.setState({
          commentsLoading: false,
          comments: comments
        });
      });
  }

  renderComments = (arr) => {
    return arr.map(comment => {
      return <small
               key={comment.id} >
                {`Comment ${comment.id}: ${comment.body}`}<br/>{ comment.email }</small>
    });
  };

  render() {
    const { post, onItemClick } = this.props;
    const { commentsLoading, comments } = this.state;

    const loader = commentsLoading ? <Loader/> : null;
    const commentBody = !commentsLoading ? this.renderComments(comments) : null;

    return(
      <a onClick={ onItemClick } href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{ `${post.id}: ${post.title}` }</h5>
        </div>
        <p className="post-body mb-1">{ post.body }</p>
        <div className="comments-wrapper">
          { loader }
          { commentBody }
        </div>
      </a>
    )
  }
}
