import React, { useState, useEffect } from "react";
import {CircularProgress, Checkbox, Divider, ListItem, ListItemText, Button} from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import apiService from "../services/apiService";

export default function TodoItem({todo, onDelete, completed}) {
  const [taskStatus, setTaskStatus] = useState(completed);
  const [itemFetching, setItemFetching] = useState(false);

  // useEffect(() => {
  //   setTaskStatus(completed)
  // }, [completed]);

  const toggleComplete = (id, completed) => {
    console.log('testFunc ' + id + ' ' + completed);
    setItemFetching(true);
    apiService.patch(`/todos/${id}`, {completed: !completed})
      .then(res => {
        setItemFetching(false);
        // ???????????????????????????????
        console.log(res.data);
      });
  };

  if (itemFetching) {
    return <CircularProgress />
  }

  return(
    <React.Fragment>
      <ListItem button>
        <Checkbox
          checked={completed ? true : false}
          onChange={() => toggleComplete(todo.id, todo.completed)}
        />
        <ListItemText
          onClick={() => toggleComplete(todo.id, todo.completed)}
          primary={todo.title} />
        <Button variant="outlined" color="secondary">
          <DeleteOutlineIcon onClick={onDelete}/>
        </Button>
      </ListItem>
      <Divider />
    </React.Fragment>
  )
}
