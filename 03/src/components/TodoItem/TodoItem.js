import React from "react";
import {Checkbox, Divider, ListItem, ListItemText, Button} from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function TodoItem(props) {

  const { todo } = props;

  return(
    <React.Fragment>
      <ListItem button>
        <Checkbox
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }} />
        <ListItemText primary={todo.title} />
        <Button variant="outlined" color="secondary">
          <DeleteOutlineIcon/>
        </Button>
      </ListItem>
      <Divider />
    </React.Fragment>
  )
}
