import React, { Component } from "react";
import PropTypes from 'prop-types';

import AuthorInfo from "../AuthorInfo/AuthorInfo";

export default class AuthorColumn extends Component {

  state = {
    user: ''
  };

  render() {
    const { userId } = this.props;

    if (!userId) {
      return <div className="col-5 author-info">
               <div className="card">
                 <div className="card-body">
                   <h4 className="card-title">Check post from the list</h4>
                 </div>
               </div>
             </div>
    }

    return(
      <AuthorInfo
        userId={userId}
      />
    )
  }
}

AuthorColumn.propTypes = {
  userId: PropTypes.number
};
