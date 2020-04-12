import React, { useEffect } from 'react';
import './GoodsList.css';
import { connect } from 'react-redux';
import { fetchGoods, itemAddToCart } from "../../actions";
import {Grid, Loader} from "semantic-ui-react";

import { WithStoreService } from "../hoc";
import GoodsListItem from "../goods-list-item";
import ErrorIndicator from "../error-indicator";

const GoodsList = (props) => {
  const { goods, loading, error, onAddToCart } = props;

  useEffect(() => {
    props.fetchGoods();
  }, []);

  if (loading) {
    return  <Loader active/>
  }
  if (error) {
    return <ErrorIndicator/>
  }

  return (
    <Grid className='items-wrapper'>
      { goods.map(item => {
        return (
          <GoodsListItem onAddToCart={() => onAddToCart(item.id)} key={item.id} item={item} />
        )
      }) }
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
    loading: state.loading,
    error: state.error
  }
};

const mapDispatchToProps = ( dispatch, {storeservice} ) => {
  return {
    fetchGoods: fetchGoods(storeservice, dispatch),
    onAddToCart: (id) => dispatch(itemAddToCart(id))
  }
};

export default WithStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(GoodsList)
);
