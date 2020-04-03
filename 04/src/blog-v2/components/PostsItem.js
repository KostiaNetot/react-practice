import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Item from "semantic-ui-react/dist/commonjs/views/Item";

import Comments from "./Comments";
import useData from "../hooks/useData";

const PostItem = ({ post }) => {
  const [ hasCommentsDisplayed, setCommentsDiplaying ] = useState(false);
  const [ user, isFetching ] = useData(`/users/${post.userId}`, null, hasCommentsDisplayed);

  return (
    <Item>
      <Item.Content>
        <Item.Header as='a'>{post.title}</Item.Header><Item.Meta>Description</Item.Meta>
        <Item.Description>
          {post.body}
        </Item.Description>
        {user &&
        <Item.Extra>
          <Link to={`/users/${user.id}`}>Go to Author</Link>
        </Item.Extra>
        }
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
