import React from 'react';
import { Button, Container, Header } from "semantic-ui-react";
import { connect } from 'react-redux';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <Container>

      <Header as='h1'>AppReduxTest</Header>
      <Header as='h2'>{counter}</Header>

      <Button primary onClick={inc} >INC</Button>

      <Button primary onClick={dec} >DEC</Button>

      <Button primary onClick={rnd} >RANDOM</Button>

    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({type: 'INC'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
