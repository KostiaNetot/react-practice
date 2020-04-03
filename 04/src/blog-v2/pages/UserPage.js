import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Icon, Image, Dimmer, Loader, Container } from 'semantic-ui-react'
import useData from "../hooks/useData";

const UserPage = () => {
  const { userId } = useParams();
  const { user, isFetching } = useData(`/users/${userId}`, null);

  console.log(userId);
  console.log(user +' '+ isFetching);

  if (isFetching || !user) {
    return (
      <Container className='page'>
        <Dimmer active inverted><Loader /></Dimmer>
      </Container>
    )
  }

  return (
    <Container className='page'>
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
          <a>
            <Icon name='user' />
            22 Albums
          </a>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default UserPage;
