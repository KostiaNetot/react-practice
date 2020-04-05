import React from 'react';
import { useParams, Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { Card, Icon, Image, Dimmer, Loader, Container, Grid, Header, List } from 'semantic-ui-react'
import useData from "../hooks/useData";
import AlbumPage from "./AlbumPage";
import NotFoundPage from "./404";

const UserPage = () => {
  const { userId } = useParams();
  const { path, url } = useRouteMatch();
  const [ user, isFetching ] = useData(`/users/${userId}`, null);
  const [ albums ] = useData(`/users/${userId}/albums`, []);

  if (isFetching || !user) {
    return (
      <Container className='page'>
        <Dimmer active inverted><Loader /></Dimmer>
      </Container>
    )
  }

  return (
    <Container className='page'>
      <Grid>
        <Grid.Column width={5}>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{user.email}</span>
              </Card.Meta>
              <Card.Description>
                {user.address.city} {user.address.zipcode} {user.address.street}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <span>
                <Icon name='user' />
                {albums.length} Albums
              </span>
            </Card.Content>
            <Card.Content>
              <List>
                {albums.map(album => {
                  return(
                    <List.Item key={album.id}>
                      <Link to={`${url}/albums/${album.id}`}>
                        {album.title}
                      </Link>
                    </List.Item>
                  )
                })}
              </List>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={11}>
          <Switch>
            <Route exact path={path}>
              <Header as='h3'>Select an album</Header>
            </Route>
            <Route path={`${path}/albums/:albumId`} exact>
              <AlbumPage userName={user.name}/>
            </Route>
            <Route path='*'>
              <NotFoundPage/>
            </Route>
          </Switch>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default UserPage;
