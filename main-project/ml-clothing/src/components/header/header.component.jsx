import React from 'react';
import { connect } from 'react-redux'; //hoc lets us have access to redux
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
//This enables us to use the svg as a react component?
import { ReactComponent as Logo } from '../../assets/crown.svg';

//styled components
import {
  LogoContainer,
  HeaderContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

//importing selectors
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        // Will will render the link as a div
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  //this will handle distributing the state to the proper selector
  currentUser: selectCurrentUser, //properties that we want no need to pass state.
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header); //connect then passes another component which wraps header

// Destructuring nested Objs:https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8
// user: { currentUser }, cart: { hidden } }//how to destructure nested objs
