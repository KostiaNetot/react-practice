import React, { Component } from "react";
import './PostsColumn.css';

import PostItem from "../PostItem/PostItem";
import BlogService from "../../services/BlogService";

class PostsColumn extends Component {

  blogService = new BlogService();

  state = {
    posts: null
  };

  // constructor() {
  //   super();
  //   this.getPostsTitles();
  // }

  componentDidMount() {
    this.getPostsTitles();
    // console.log('DidMount');
    // console.log(this.state);
  }

  getPostsTitles() {
    console.log('getPostsTitles');
    this.blogService
      .getAllPosts()
      .then(data => {
        console.log(data);
        this.setState({
          posts: data
        });
      });
    console.log(this.state);
  }

  render() {
    return(

      <div className="col-7 posts-list">

        <div className="list-group">

          <PostItem />

        </div>
      </div>


    )
  }
}

export default PostsColumn;
