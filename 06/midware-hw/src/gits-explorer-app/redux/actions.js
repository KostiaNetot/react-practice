import axios from 'axios';

export const FETCH_GISTS_REQUEST = 'FETCH_GISTS_REQUEST';
export const FETCH_GISTS_SUCCESS = 'FETCH_GISTS_SUCCESS';
export const FETCH_GISTS_ERROR = 'FETCH_GISTS_ERROR';
export const FETCH_SELECTED_GIST_REQUEST = 'FETCH_SELECTED_GIST_REQUEST';
export const FETCH_SELECTED_GIST_SUCCESS = 'FETCH_SELECTED_GIST_SUCCESS';
export const FETCH_SELECTED_GIST_ERROR = 'FETCH_SELECTED_GIST_ERROR';

const fetchSelectedGistsRequest = () => ({
  type: FETCH_SELECTED_GIST_REQUEST
});

const fetchSelectedGistsSuccess = (res, lang) => ({
  type: FETCH_SELECTED_GIST_SUCCESS,
  payload: {
    content: res,
    language: lang
  }
});

const fetchSelectedGistsError = (err) => ({
  type: FETCH_SELECTED_GIST_ERROR,
  payload: err.response
});

export const fetchSelectedGists = (item) => {
  return dispatch => {
    dispatch(fetchSelectedGistsRequest());
    axios.get(item.raw_url)
      .then(res => dispatch(fetchSelectedGistsSuccess(res.data, item.language)))
      .catch(err => dispatch(fetchSelectedGistsError(err)))
  }
};

const fetchGistsRequest = () => ({
  type: FETCH_GISTS_REQUEST
});

const findFilesObject = (data) => {
  let filteredData = [];
  data.map(item => {
    return Object.values(item.files).map(file => {
      filteredData.push(file)
    })
  });
  console.log(filteredData);
  return filteredData;
};

const fetchGistsSuccess = (res) => ({
  type: FETCH_GISTS_SUCCESS,
  payload: findFilesObject(res.data)
});

const fetchGistsError = (err) => ({
  type: FETCH_GISTS_ERROR,
  payload: err.response
});

export const fetchGists = () => {
  return dispatch => {
    dispatch(fetchGistsRequest());
    axios.get(`https://api.github.com/gists/public`)
      .then(res => dispatch(fetchGistsSuccess(res)))
      .catch(err => dispatch(fetchGistsError(err)))
  }
};
