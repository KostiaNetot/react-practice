import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container, Header, Grid, Card, Image, Loader, Dimmer} from "semantic-ui-react";
import useData from "../hooks/useData";

const AlbumPage = ({ userName }) => {
  const { userId, albumId } = useParams();
  const [ album, isFetching ] = useData(`/albums/${albumId}`, null);
  const [ pictures ] = useData(`/albums/${albumId}/photos`, null);

  if (isFetching || !album) {
    return (
      <Container className='page'>
        <Dimmer inverted>
          <Loader>Loading...</Loader>
        </Dimmer>
      </Container>
    )
  }

  return (
    <Container className='page'>
      <Header as='h2'>{album.title.toUpperCase()}</Header>
      <p>{userName}</p>
      {!pictures && <Loader/>}
      {pictures &&
      <Image.Group size='small'>
        { pictures.map(pic => <Image key={pic.id} src={pic.thumbnailUrl} />) }
      </Image.Group>
      }
    </Container>
  );
};

export default AlbumPage;
