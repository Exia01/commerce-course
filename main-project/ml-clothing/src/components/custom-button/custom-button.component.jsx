import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    // type etc
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    // will always render custom-button but conditional for google-sign-in
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
