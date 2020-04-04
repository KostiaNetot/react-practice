import React from 'react';
import {List} from "semantic-ui-react";
import {Link} from "react-router-dom";

const AlbumsItem = ({ album }) => {

  return(
    <List.Item key={album.id} icon='picture' content={
      <Link to={`/users/${album.userId}/albums/${album.id}`}>
        {album.title}
      </Link>
    } />
  );
};

export default AlbumsItem;
