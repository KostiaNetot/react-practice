import React from 'react';
import './AppHeader.css'
import { NavLink } from "react-router-dom";
import { Header, Icon } from "semantic-ui-react";

const AppHeader = () => {
  return (
    <Header className='app-header' as='h1' block>
      <Header.Content>
        <NavLink to='/'>My Store</NavLink>
      </Header.Content>
      <div className='cart-info'>
        <span className='quantity'>10 items</span>
        <span className='total'>100$</span>
        <NavLink to='/cart'>
          <Icon name='shopping cart' />
        </NavLink>
      </div>
    </Header>
  );
};

export default AppHeader;
