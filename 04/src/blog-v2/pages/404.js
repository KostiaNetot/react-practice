import React from 'react';
import { Header, Container, Image } from "semantic-ui-react";

const PAGE_URL = 'https://media.istockphoto.com/vectors/error-404-page-not-found-vector-id673103792';

const NotFoundPage = () => {


  return (
    <Container>
      <Image src={PAGE_URL} size='large' circular centered />
    </Container>
  );
};

export default NotFoundPage;
