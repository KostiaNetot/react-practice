import React, { Component } from "react";
import './ExtendedPostItem.css';


export default class ExtendedPostItem extends Component {

  render() {

    const { post, onItemClick } = this.props;

    return(
      <a onClick={ onItemClick } href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{ post.title }</h5>
        </div>
        <p className="post-body mb-1">{ post.body }</p>
        <div className="comments-wrapper">
          <small>laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam
            autem quasi\nreiciendis et nam sapiente accusantium</small>
          <small>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem
            error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et</small>
          <small>est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem
            error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et</small>
        </div>
      </a>
    )
  }
}
