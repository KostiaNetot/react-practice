import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

export const selectSubreddit = (subreddit) => {
  return {
    type: SELECT_SUBREDDIT,
    payload: subreddit
  }
};

const fetchPostsRequests = () => ({
  type: FETCH_POSTS_REQUEST
});

const fetchPostsSuccess = (res) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: res.data.data.children.map(child => child.data)
});

const fetchPostsError = (err) => ({
  type: FETCH_POSTS_ERROR,
  payload: err.response
});

export const fetchPosts = (subreddit) => {
  return dispatch => {
    dispatch(fetchPostsRequests());
  axios.get(`https://www.reddit.com/r/${subreddit}.json`)
    .then(res => dispatch(fetchPostsSuccess(res)))
    .catch(err => dispatch(fetchPostsError(err)))
  }
};
