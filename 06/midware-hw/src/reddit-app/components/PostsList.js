import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";

const PostsList = () => {
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector(state => state.selectedSubreddit);
  const { items, isLoading } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit))
  }, [selectedSubreddit]);

  return (
    <div>
      { isLoading && <h3>Loading...</h3> }
      <ul>
        { items.map((item, i) => <li key={i}>{item.title}</li>) }
      </ul>
    </div>
  );
};

export default PostsList;
