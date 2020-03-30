import React, {useState} from "react";
import {Grid, List, CircularProgress} from "@material-ui/core";

import useData from "../../hooks/useData";
import TodoItem from "../TodoItem/TodoItem";
import InfiniteScroll from 'react-infinite-scroller';

const TODOS_PER_PAGE = 6;

function TodoList() {
  const [ todos, isFetching ] = useData('/todos', []);
  const [ displayedTodos, setDisplayedTodos ] = useState(TODOS_PER_PAGE);


  return(
    <Grid container justify={'center'}>
      <Grid item xs={6}>

        <List component="nav" aria-label="main mailbox folders">

          {isFetching ? <CircularProgress /> : null}
          <InfiniteScroll
            initialLoad={false}
            pageStart={1}
            loadMore={page => setDisplayedTodos(page * TODOS_PER_PAGE)}
            hasMore={todos.length > displayedTodos}
            loader={<div className="loader" key={0}>Loading ...</div>}
          >
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
          </InfiniteScroll>

        </List>

      </Grid>
    </Grid>
  )
}

export default TodoList;
