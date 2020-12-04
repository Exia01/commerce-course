import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  function onDeleteItemClickHandler() {
    clearItem(cartItem);
  }

  function onAddItemClickHandler() {
    addItem(cartItem);
  }

  function onSubtractItemClickHandler() {
    removeItem(cartItem);
  }

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={onSubtractItemClickHandler}>
          {' '}
          &#8249;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={onAddItemClickHandler}>
          &#8250;
        </div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={onDeleteItemClickHandler}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);

// UTF8 Characters: https://www.w3schools.com/charsets/ref_utf_dingbats.asp
