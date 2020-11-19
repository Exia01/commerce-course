import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    // type etc
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    // will always render custom-button but conditional for google-sign-in
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
