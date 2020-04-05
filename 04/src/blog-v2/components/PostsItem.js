import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Item from "semantic-ui-react/dist/commonjs/views/Item";

import Comments from "./Comments";
import useData from "../hooks/useData";

const PostItem = ({ post }) => {
  const [ hasCommentsDisplayed, setCommentsDiplaying ] = useState(false);
  const [ user ] = useData(`/users/${post.userId}`, null, hasCommentsDisplayed);

  return (
    <Item>
      <Item.Content>
        <Item.Header>{post.title}</Item.Header>
        <Item.Description>
          {post.body}
        </Item.Description>
        <Item.Extra>
          <Link to={`/users/${post.userId}`}>Go to {user ? user.name : 'Author'} page</Link>
        </Item.Extra>
        <Item.Extra onClick={() => setCommentsDiplaying(!hasCommentsDisplayed)}>Comments</Item.Extra>
        {hasCommentsDisplayed &&
        <Item.Extra>
          <Comments postId={post.id} />
        </Item.Extra>
        }
      </Item.Content>
    </Item>
  );
};

export default PostItem;
