import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //hoc lets us have access to redux
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
//This enables us to use the svg as a react component?
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

//importing selectors
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({//this will handle distributing the state to the proper selector
  currentUser: selectCurrentUser,//properties that we want no need to pass state. 
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header); //connect then passes another component which wraps header

// Destructuring nested Objs:https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8
// user: { currentUser }, cart: { hidden } }//how to destructure nested objs
