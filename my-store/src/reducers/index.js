
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
export const ITEM_REMOVED_FROM_CART = 'ITEM_REMOVED_FROM_CART';
export const ALL_ITEM_REMOVED_FROM_CART = 'ALL_ITEM_REMOVED_FROM_CART';

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

    case ALL_ITEM_REMOVED_FROM_CART:

      return state;

    case ITEM_ADDED_TO_CART:
      const itemId = action.payload;
      const prod = state.goods.find(prod => {
        return prod.id === itemId
      });
      const itemIndex = state.cartItems.findIndex(({id}) => id === itemId);
      const item = state.cartItems[itemIndex];
      let newItem;
      if (item) {
        newItem = {
          ...item,
          count: item.count + 1,
          total: item.total + prod.price,
        };
      } else {
        newItem = {
          id: prod.id,
          title: prod.title,
          count: 1,
          total: prod.price,
          img: prod.img
        };
      }

      if (itemIndex < 0) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            newItem
          ]
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            newItem,
            ...state.cartItems.slice(itemIndex + 1)
          ]
        };
      }


    default:
      return state;
  }

};

