import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import { Container, Dimmer, Loader, Item, List } from "semantic-ui-react";
import useData from "../hooks/useData";

import AlbumsItem from "../components/AlbumsItem";

const AlbumsPage = () => {
  const [ albums, isFetching ] = useData('/albums', []);
  const { path, url } = useRouteMatch();

  return (
    <Container className='page'>
      <Dimmer active={isFetching} inverted>
        <Loader>Loading...</Loader>
      </Dimmer>
      <Item.Group>
        <List>
          { albums.map(album => <AlbumsItem key={album.id} album={album} />) }
        </List>
      </Item.Group>
    </Container>
  );
};

export default AlbumsPage;
