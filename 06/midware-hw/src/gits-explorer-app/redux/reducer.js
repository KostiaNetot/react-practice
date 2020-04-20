import { combineReducers } from "redux";
import { FETCH_GISTS_REQUEST, FETCH_GISTS_SUCCESS, FETCH_GISTS_ERROR,
         FETCH_SELECTED_GIST_REQUEST, FETCH_SELECTED_GIST_SUCCESS, FETCH_SELECTED_GIST_ERROR } from "./actions";

const selectedGistReducer = (state = {
  isLoading: false,
  content: 'asd',
  language: 'eng',
  error: null
}, action) => {
  switch (action.type) {
    case FETCH_SELECTED_GIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case FETCH_SELECTED_GIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        content: action.payload,
        language: action.payload.language
      };

    case FETCH_SELECTED_GIST_ERROR:
      return {
        ...state,
        isLoading: false,
        content: 'asd',
        language: 'eng',
        error: action.payload
      };

    default:
      return state;
  }
};

const gistsReducer = (state = {
  isLoading: false,
  items: [],
  error: null
}, action) => {
  switch (action.type) {
    case FETCH_GISTS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case FETCH_GISTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      };

    case FETCH_GISTS_ERROR:
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
  gists: gistsReducer,
  selectedGist: selectedGistReducer
});

export default rootReducer;
