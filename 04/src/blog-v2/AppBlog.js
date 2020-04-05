import React  from 'react';
import { Container, Header, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, NavLink, Route } from "react-router-dom";

import './AppBlog.css';
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import UsersPage from "./pages/UsersPage";
import AlbumsPage from "./pages/AlbumsPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/404";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AppBlog = () => {

  return (
    <Container>

      <Router>
        <Header as='h1' className='blog-header'><NavLink to='/' activeClassName='active-nav'>BLOG<br/> <small>Kostia. Second edition</small></NavLink></Header>
        <Menu>
          <NavLink to='/posts' className='item' activeClassName='active-nav'>Posts</NavLink>
          <NavLink to='/users' className='item' activeClassName='active-nav'>Users</NavLink>
          <NavLink to='/albums' className='item' activeClassName='active-nav'>Albums</NavLink>
        </Menu>

        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key}
                           timeout={400}
                           classNames="fade">
              <Switch location={location}>
                <Route exact path='/' component={HomePage} />
                <Route path='/posts' component={PostsPage} />
                <Route exact path='/users' component={UsersPage} />
                <Route path='/users/:userId' component={UserPage} />
                <Route path='/albums' component={AlbumsPage} />
                <Route path='*' component={NotFoundPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />

      </Router>
    </Container>
  );
};

export default AppBlog;
