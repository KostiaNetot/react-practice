import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { List, Loader } from "semantic-ui-react";
import { fetchGists, fetchSelectedGists } from "../redux/actions";

const GistsList = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.gists);

  useEffect(() => {
    dispatch(fetchGists());
  }, []);

  return (
    <List divided relaxed>
      { isLoading && <Loader active>Loading</Loader> }
      {
        items.map((item, i) => {
          return(
            <List.Item key={i}>
              <List.Icon name='github' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header onClick={() => dispatch(fetchSelectedGists(item))} as='a'>{item.filename}</List.Header>
                {/*<List.Header onClick={() => console.log(item.raw_url)} as='a'>{item.filename}</List.Header>*/}
                <List.Description>{item.type}</List.Description>
              </List.Content>
            </List.Item>
          )
        })
      }
    </List>
  );
};

export default GistsList;
