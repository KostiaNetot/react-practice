import React from 'react';
import { Link } from "react-router-dom";
import { Item, Image } from "semantic-ui-react";

const UsersItem = ({ user }) => {
  return (
    <Item>
      <Item.Content>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matthew.png' />
        <Item.Header>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </Item.Header>
        <Item.Meta>{user.email}</Item.Meta>
      </Item.Content>
    </Item>
  );
};

export default UsersItem;
