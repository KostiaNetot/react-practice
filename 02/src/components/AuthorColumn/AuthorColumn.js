import React, { Component } from "react";

import BlogService from "../../services/BlogService";

export default class AuthorColumn extends Component {

  state = {
    loading: true,
    user: ''
  };

  blogService = new BlogService();

  getPostsAuthor (id) {
    this.blogService.getUser(id)
      .then(user => {
        this.setState({
          loading: false,
          user: user
        })
      });
  }

  componentDidMount() {
    const { userId } = this.props;
    this.getPostsAuthor(userId);
  }

  render() {
      const { user } = this.state;
      const { name, address } = user;

    return(
      <div className="col-5 author-info">

        <div className="card">
          <div className="card-body">
            <h4 className="card-title">author: {name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">city: </h6>
            <p className="albums-header">Albums:</p>
            <ul>
              <li>quidem molestiae enim</li>
              <li>eaque aut omnis a</li>
              <li>natus impedit quibusdam illo est</li>
            </ul>
            <a href="#" target="_blank" className="card-link">email: Sincere@april.biz</a>
            <a href="#" target="_blank" className="card-link">website: "hildegard.org</a>
          </div>
        </div>

      </div>
    )
  }
}
