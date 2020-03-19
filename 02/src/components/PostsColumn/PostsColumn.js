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

  componentDidMount() {
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
                  onItemSelected={() => this.props.onItemSelected(post.userId)}
                  key={post.id}
                  userId={post.userId}
                  post={post} />
      });
  }

  render() {
    const { loading } = this.state;
    const loader = loading ? <Loader /> : null;
    const content = !loading ? this.renderPostItems() : null;

    return(
      <div className="col-7 posts-list">
        <div className="list-group">
          { loader }
          { content }
        </div>
      </div>
    )
  }
}

