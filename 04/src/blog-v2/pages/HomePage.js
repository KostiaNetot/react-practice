import React from 'react';
import { Header, Icon, Image } from "semantic-ui-react";

const HomePage = () => {
  return (
    <div>
      <Header as='h2' icon textAlign='center'>
        <Header.Content className='home-header'>Homepage</Header.Content>
        <Icon name='home' circular />
      </Header>
    </div>
  );
};

export default HomePage;
