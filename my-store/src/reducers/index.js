
const initialState = {
  goods: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 150
};

export const FETCH_GOODS_REQUEST = 'FETCH_GOODS_REQUEST';
export const FETCH_GOODS_SUCCESS = 'FETCH_GOODS_SUCCESS';
export const FETCH_GOODS_FAILURE = 'FETCH_GOODS_FAILURE';
export const ITEM_ADDED_TO_CART = 'ITEM_ADDED_TO_CART';

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_GOODS_REQUEST:
      return {
        ...state,
        goods: [],
        loading: true,
        error: null
      };
    case FETCH_GOODS_SUCCESS:
      return {
        ...state,
        goods: action.payload,
        loading: false,
        error: null
      };
    case FETCH_GOODS_FAILURE:
      return {
        ...state,
        goods: [],
        loading: false,
        error: action.payload
      };

    case ITEM_ADDED_TO_CART:
      const itemId = action.payload;
      const item = state.goods.find(item => item.id === itemId);
      const newItem = {
        id: item.id,
        title: item.title,
        count: 1,
        total: item.price,
        img: item.img
        };

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          newItem
        ]
      };

    default:
      return state;
  }
};

