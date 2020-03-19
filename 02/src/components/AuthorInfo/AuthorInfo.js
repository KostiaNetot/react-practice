import React, { Component } from "react";
import './AuthorInfo.css';

import BlogService from "../../services/BlogService";
import Loader from "../Loader/Loader";

export default class AuthorInfo extends Component {
  blogService = new BlogService();

  state = {
    loading: true,
    user: null,
    albums: null,
    albumsLoading: true
  };

  getPostsAuthor () {
    const { userId } = this.props;

    this.blogService.getUser(userId)
      .then(user => {
        this.setState({
          loading: false,
          user: user
        });
      });
  }

  getAuthorAlbums () {
    const { userId } = this.props;

    this.blogService.getAlbums(userId)
      .then(albums => {
        this.setState({
          albums: albums,
          albumsLoading: false
        });
      });
  }

  componentDidMount() {
    this.getPostsAuthor();
    this.getAuthorAlbums();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.userId !== this.props.userId) {
      this.getPostsAuthor();
      this.getAuthorAlbums();
    }

    if (!this.state.loading && prevProps.userId !== this.props.userId) {
      console.log('this.state.loading');
      this.setState({
        loading: false
      });
    }
  };

  componentWillUnmount() {
    console.log('Card will unmount');
  }

  renderAlbumsList = (arr) => {
    return arr.map(album => {
      return <li key={album.id}>{ album.title }</li>
    });
  };

  renderContent() {
    const { user, albums, albumsLoading } = this.state;
    const { address } = user;

    const loader = albumsLoading ? <Loader/> : null;
    const albumsList = !albumsLoading ? this.renderAlbumsList(albums) : null;

    return(
      <div className="card-body">
        <h4 className="card-title">author: {user.name}</h4>
        <h6 className="card-subtitle mb-2 text-muted">city: {address.city}</h6>
        <p className="albums-header">Albums:</p>
        <ul>
          { loader }
          { albumsList }
        </ul>
        <a href="#" target="_blank" className="card-link">email: {user.email} </a>
        <a href="#" target="_blank" className="card-link">website: {user.website}</a>
      </div>
    )
  }

  render() {

    const { loading } = this.state;
    const loader = loading ? <Loader /> : null;
    const content = !loading ? this.renderContent() : null;

    return(
      <div className="col-5 author-info">
        <div className="card">
          {loader}
          {content}
        </div>
      </div>
    )
  }
}
