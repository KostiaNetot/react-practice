import React from 'react';
import './App.css';
import { WithStoreService } from '../hoc';

import { Container, Header, Card, Image, Icon, Button } from "semantic-ui-react";

const App = ({ storeservice }) => {
  const goods = storeservice.getGoods();
  console.log(goods);

  return (
    <Container>
      <Header as='h1' className='store-header' block>My Store</Header>

      {
        goods.map(item => {
          return(
            <Card key={item.id}>
              <Image size='small' src={item.img} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>
                  <span className='date'>Price:<b className='font-black'>{item.price}$</b></span>
                </Card.Meta>
                <Card.Description>{item.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button animated='vertical'>
                  <Button.Content visible>Add to cart</Button.Content>
                  <Button.Content hidden>
                    <Icon name='shop' />
                  </Button.Content>
                </Button>
              </Card.Content>
            </Card>
          )
        })
      }
    </Container>
  );
};

export default WithStoreService()(App);
