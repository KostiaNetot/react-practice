import React from "react";
import {FormControlLabel, Checkbox, Divider, ListItem, ListItemText, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles({
  root: {
    justifyContent: 'space-between',
  },
});

export default function TodoItem(props) {
  const styles = useStyles();
  const { todo } = props;

  return(
    <React.Fragment>
      <ListItem button justifyContent="space-between" >
        <ListItemText
          primary={todo.title}
          onClick={} />
        <Button variant="outlined" color="secondary">
          <DeleteOutlineIcon/>
        </Button>
      </ListItem>
      <Divider />
    </React.Fragment>
  )
}
