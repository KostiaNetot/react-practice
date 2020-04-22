import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { List, Loader } from "semantic-ui-react";
import { fetchGists } from "../redux/actions";
import InfiniteScroll from 'react-infinite-scroller';
import GistsListItem from "./GistsListItem";

const GISTS_PER_PAGE = 15;

const GistsList = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.gists);

  const [displayedGists, setDisplayedGists] = useState(GISTS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchGists());
  }, []);

  return (
    <React.Fragment>
      <List divided relaxed>
        { isLoading && <Loader active>Loading</Loader> }
        <InfiniteScroll
          initialLoad={false}
          pageStart={1}
          loadMore={page => setDisplayedGists(page * GISTS_PER_PAGE)}
          hasMore={items.length > displayedGists}
          // loader={<div className="loader" key={0}>Loading ...</div>}
        >
        {
          items.slice(0, displayedGists).map((item, i) => {
            return(
              <GistsListItem item={item} key={i} />
            )
          })
        }
        </InfiniteScroll>
      </List>
    </React.Fragment>
  );
};

export default GistsList;
