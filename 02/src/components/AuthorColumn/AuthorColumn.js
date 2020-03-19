import React, { Component } from "react";

import BlogService from "../../services/BlogService";

export default class AuthorColumn extends Component {

  state = {
    loading: true,
    user: ''
  };

  blogService = new BlogService();

  getPostsAuthor () {
    const { userId } = this.props;
    if (!userId) {
      return;
    }

    this.blogService.getUser(userId)
      .then(user => {
        this.setState({
          loading: false,
          user: user
        })
      });
  }

  // componentDidMount() {
  //   this.getPostsAuthor();
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.userId !== this.props.userId) {
      console.log(this.props);
      this.getPostsAuthor();
    }
  }

  render() {
    const { user } = this.state;
    const { name, email, website } = user;

    if (!user) {
      return <div className="col-5 author-info">
               <div className="card">
                 <div className="card-body">
                   <h4 className="card-title">Check post from the list</h4>
                 </div>
               </div>
             </div>
    }

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
            <a href="#" target="_blank" className="card-link">email: { email }</a>
            <a href="#" target="_blank" className="card-link">website: { website }</a>
          </div>
        </div>

      </div>
    )
  }
}
