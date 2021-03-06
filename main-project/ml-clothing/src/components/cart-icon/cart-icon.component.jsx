import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'; //action

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
//functional component
const CartIcon = (
  { toggleCartHidden, itemCount } //destructuring from the props
) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()), //named func, points to dispatch with that func that we imported
});

const mapStateToProps = createStructuredSelector({ 
  //this is an example of a redux selector usage
  itemCount: selectCartItemsCount, //takes whole state will slice later
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
