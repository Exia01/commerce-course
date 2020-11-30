import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = (
  { cartItems, history, dispatch } //getting history props from withRouter
) => {
  function onClickHandler() {
    history.push('/checkout');
    dispatch(toggleCartHidden());
    // connect passes dispatch by itself if we do not pass second arg, can be used for a one off
  }
  return (
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
      <CustomButton onClick={onClickHandler}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems, //memoized selector
});

//all hoc return components and take components ==> stacking HOCS. Order matters!!!
export default withRouter(connect(mapStateToProps, null)(CartDropdown));
//connect passes dispatch to props if null is second arg

/*could also pass the state like this:
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state), //memoized selector
}); */
