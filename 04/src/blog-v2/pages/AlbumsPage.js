import React from 'react';
import { Container, Dimmer, Loader, Item, List } from "semantic-ui-react";
import useData from "../hooks/useData";

import AlbumsItem from "../components/AlbumsItem";

const AlbumsPage = () => {
  const [ albums, isFetching ] = useData('/albums', []);

  return (
    <Container className='page'>
      <Dimmer className='dimmmer' active={isFetching} inverted>
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
