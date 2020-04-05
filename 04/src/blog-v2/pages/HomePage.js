import React from 'react';
import { Header, Icon, Container } from "semantic-ui-react";

const HomePage = () => {
  return (
    <Container className='page'>
      <Header as='h2' icon textAlign='center'>
        <Header.Content className='home-header'>Homepage</Header.Content>
        <Icon name='home' circular />
      </Header>
    </Container>
  );
};

export default HomePage;
