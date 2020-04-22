import React from 'react';
import {List} from "semantic-ui-react";
import {fetchSelectedGists} from "../redux/actions";
import {useDispatch} from "react-redux";

const GistsListItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <List.Item className='gists-item'>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header onClick={() => dispatch(fetchSelectedGists(item))} as='a'>{item.filename}</List.Header>
        <List.Description>{item.type}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default GistsListItem;
