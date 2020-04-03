import React, {useState} from "react";
import {Grid, List, CircularProgress} from "@material-ui/core";
import axios from 'axios';

import useData from "../hooks/useData";
import TodoItem from "./TodoItem";
import InfiniteScroll from 'react-infinite-scroller';

const TODOS_PER_PAGE = 10;

function TodoList() {
  const [ todos, isFetching ] = useData('/todos', []);
  const [ displayedTodos, setDisplayedTodos ] = useState(TODOS_PER_PAGE);
  const [ itemFetching, setItemFetching ] = useState(false);

  // const toggleComplete = (id, completed) => {
  //   console.log('testFunc ' + id + ' ' + completed);
  // };

  const testFunc2 = () => {
    console.log('testFunc2');
  };

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
            {todos.slice(0, displayedTodos).map(todo => {
              return (
                <TodoItem
                  key={todo.id}
                  completed={todo.completed}
                  onDelete={testFunc2}
                  todo={todo} />
              )
            })}
          </InfiniteScroll>

        </List>

      </Grid>
    </Grid>
  )
}

export default TodoList;
