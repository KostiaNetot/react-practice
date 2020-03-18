import React, { Component } from "react";
import './PostsColumn.css';

import PostItem from "../PostItem/PostItem";
import BlogService from "../../services/BlogService";

class PostsColumn extends Component {

  blogService = new BlogService();

  state = {
    posts: null
  };

  constructor() {
    super();
    this.getPostsTitles();
  }

  // componentDidMount() {
  //   this.getPostsTitles();
  // }

  getPostsTitles() {
    this.blogService
      .getAllPosts()
      .then(data => {
        this.setState({
          posts: data
        });
      });
  }

  renderPostItems(){
    const { posts } = this.state;
    console.log(posts);
      return <PostItem />
  }

  render() {
    // const {posts} = this.state;
    // console.log(posts);

    return(

      <div className="col-7 posts-list">

        <div className="list-group">

          { this.renderPostItems() }

        </div>
      </div>


    )
  }
}

export default PostsColumn;
