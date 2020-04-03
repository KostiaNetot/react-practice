import React from 'react';
import { Container, Header, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, NavLink, Route } from "react-router-dom";

import './AppBlog.css';
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import UsersPage from "./pages/UsersPage";
import AlbumsPage from "./pages/AlbumsPage";
import UserPage from "./pages/UserPage";

const AppBlog = () => {
  return (
    <Container>
      <Router>
        <Header><NavLink to='/' activeClassName='active-nav'>Blog second edition</NavLink></Header>
        <Menu>
          <NavLink to='/posts' className='item' activeClassName='active-nav'>Posts</NavLink>
          <NavLink to='/users' className='item' activeClassName='active-nav'>Users</NavLink>
          <NavLink to='/albums' className='item' activeClassName='active-nav'>Albums</NavLink>
        </Menu>

        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/posts' >
            <PostsPage />
          </Route>
          <Route path='/users' exact>
            <UsersPage/>
          </Route>
          <Route path='/users/:userId' >
            <UserPage/>
          </Route>
          <Route path='/albums' >
            <AlbumsPage/>
          </Route>
        </Switch>

      </Router>
    </Container>
  );
};

export default AppBlog;
