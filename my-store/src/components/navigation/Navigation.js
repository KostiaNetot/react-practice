import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { Menu } from "semantic-ui-react";

const Navigation = () => {



  return (
    <Menu>
      <NavLink to='/' className='item' activeClassName='active-nav'>Home</NavLink>
      <NavLink to='/goods' className='item' activeClassName='active-nav'>Goods</NavLink>
      <NavLink to='/cart' className='item' activeClassName='active-nav'>Cart</NavLink>
    </Menu>
  );
};

export default Navigation;
