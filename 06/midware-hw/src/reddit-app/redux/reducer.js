import { combineReducers } from "redux";
import { SELECT_SUBREDDIT, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from "./actions";


const selectedSubredditReducer = (state = 'reactjs', action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.payload;

    default:
      return state;
  }
};

const postsReducer = (state = {
  isLoading: false,
  items: [],
  error: null
}, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      };

    case FETCH_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        items: [],
        error: action.payload
      };

    default:
      return state;
  }

};


const rootReducer = combineReducers({
  selectedSubreddit: selectedSubredditReducer,
  posts: postsReducer
});

export default rootReducer;
