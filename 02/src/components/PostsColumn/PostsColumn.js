import React, { Component } from "react";
import './PostsColumn.css';

import PostItem from "../PostItem/PostItem";
import BlogService from "../../services/BlogService";
import Loader from "../Loader/Loader";

export default class PostsColumn extends Component {

  blogService = new BlogService();

  state = {
    posts: [],
    loading: true
  };

  constructor() {
    super();
    this.getPostsTitles();
  }

  getPostsTitles() {
    this.blogService
      .getAllPosts()
      .then(data => {
        this.setState({
          posts: data,
          loading: false
        });
      });
  }

  renderPostItems() {
    const { posts } = this.state;
      return posts.map((post, index) => {
        return <PostItem
                  key={index}
                  post={post} />
      });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <div className="col-7 posts-list">
               <Loader />
             </div>
    }

    return(
      <div className="col-7 posts-list">
        <div className="list-group">

          { this.renderPostItems() }

        </div>
      </div>
    )
  }
}

