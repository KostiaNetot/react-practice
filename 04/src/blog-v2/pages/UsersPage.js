import React from 'react';
import { Container, Dimmer, Loader, Item } from "semantic-ui-react";
import useData from "../hooks/useData";
import UsersItem from "../components/UsersItem";
// import AnimatedWrapper from "./AnimatedWrapper";

const UsersPage = () => {
  const [ users, isFetching ] = useData('/users', []);

  return (
    <Container className='page'>
      <Dimmer active={isFetching} inverted>
        <Loader>Loading...</Loader>
      </Dimmer>
      <Item.Group>
        { users.map(user => <UsersItem key={user.id} user={user}/>) }
      </Item.Group>
    </Container>
  );
};

export default UsersPage;
