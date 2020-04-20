import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import GistsList from "./GistsList";
import CheckedGist from "./CheckedGist";

const ContentApp = () => {
  return (
    <Container>
      <Grid>
        <Grid.Column width={6}>
          <GistsList/>
        </Grid.Column>
        <Grid.Column width={10}>
          <CheckedGist/>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default ContentApp;
