import React from 'react';
import { Link } from "react-router-dom";
import {Comment, Icon} from "semantic-ui-react";
import useData from "../hooks/useData";

const Comments = ({ postId }) => {
  const [comments, isFetching] = useData(`posts/${postId}/comments`, []);

  if (isFetching) return <Icon name='asterisk' loading />;

  return (
    <Comment.Group className='comments-wrapper'>
      { comments.map(comment => (
        <Comment key={comment.id}>
          <Comment.Avatar src='https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' />
          <Comment.Content>
            <Comment.Author>
              <Link to={`/users/${comment.userId}`}>{comment.email}</Link>
            </Comment.Author>
            <Comment.Text>{comments.body}</Comment.Text>
          </Comment.Content>
        </Comment>
      )) }
    </Comment.Group>
  );
};

export default Comments;
