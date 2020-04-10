import React, { useEffect } from 'react';
import './GoodsList.css';
import { connect } from 'react-redux';
import { goodsLoaded, goodsRequested, goodsError } from "../../actions";
import {Grid, Loader} from "semantic-ui-react";

import { WithStoreService } from "../hoc";
import GoodsListItem from "../goods-list-item";
import ErrorIndicator from "../error-indicator";

const GoodsList = (props) => {
  const { goods, loading, error } = props;

  useEffect(() => {
    const { storeservice, goodsLoaded, goodsRequested, goodsError } = props;
    goodsRequested();
    storeservice.getGoods()
      .then(data => goodsLoaded(data))
      .catch(err => goodsError(err));
  }, []);

  if (loading) {
    return  <Loader active/>
  }
  if (error) {
    return <ErrorIndicator/>
  }

  return (
    <Grid className='items-wrapper'>
      { goods.map(item => <GoodsListItem key={item.id} item={item} />) }
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

const mapDispatchToProps = (dispatch) => {
  return {
    goodsLoaded: (newGoods) => {
      dispatch(goodsLoaded(newGoods))
    },
    goodsRequested: () => dispatch(goodsRequested()),
    goodsError: goodsError
  }
};

export default WithStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(GoodsList)
);
