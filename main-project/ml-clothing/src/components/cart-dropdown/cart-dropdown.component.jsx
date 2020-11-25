import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = (
  { cartItems, history } //getting history props from withRouter
) => (
  //functional component. //stateless
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? ( //falsey or truthy
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your Cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems, //memoized selector
});

//all hoc return components and take components ==> stacking HOCS. Order matters!!!
export default withRouter(connect(mapStateToProps, null)(CartDropdown));

/*could also pass the state like this:
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state), //memoized selector
}); */
