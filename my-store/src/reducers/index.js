
const initialState = {
  goods: [],
};

export const GOODS_LOADED = 'GOODS_LOADED';

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'GOODS_LOADED':
      return {
        goods: action.payload
      };

    default:
      return state;
  }
};

