import { FETCH_GOODS_REQUEST, FETCH_GOODS_SUCCESS, FETCH_GOODS_FAILURE, ITEM_ADDED_TO_CART } from "../reducers";


const goodsRequested = () => {
  return {
    type: FETCH_GOODS_REQUEST
  }
};

const goodsLoaded = (newGoods) => {
  return {
    type: FETCH_GOODS_SUCCESS,
    payload: newGoods
  }
};

const goodsError = (error) => {
  return {
    type: FETCH_GOODS_FAILURE,
    payload: error
  }
};

const itemAddToCart = (itemId) => {
  return {
    type: ITEM_ADDED_TO_CART,
    payload: itemId
  }
};

const fetchGoods = (storeservice, dispatch) => () => {
  dispatch(goodsRequested());
  storeservice.getGoods()
    .then(data => dispatch(goodsLoaded(data)))
    .catch(error => dispatch(goodsError(error)));
};

export {
  fetchGoods,
  itemAddToCart
}
