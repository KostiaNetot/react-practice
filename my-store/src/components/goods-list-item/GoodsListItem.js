import React from 'react';
import './GoodsLIstItem.css'
import { Card, Image, Button, Icon } from "semantic-ui-react";

const GoodsListItem = ({ item, onAddedToCart }) => {
  return (
    <Card className='item-card' key={item.id}>
      <Image size='small' src={item.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{item.title}</Card.Header>
        <Card.Description>{item.description}</Card.Description>

      </Card.Content>
      <Card.Content extra className='btn-wrapper'>
        <Card.Meta>
          <span className='date'>Price: <b className='font-black'>{item.price}$</b></span>
        </Card.Meta>
        <Button onClick={onAddedToCart} className='card-btn' animated='vertical'>
          <Button.Content visible>Add to cart</Button.Content>
          <Button.Content hidden>
            <Icon name='shop' />
          </Button.Content>
        </Button>
      </Card.Content>
  </Card>
  );
};

export default GoodsListItem;
