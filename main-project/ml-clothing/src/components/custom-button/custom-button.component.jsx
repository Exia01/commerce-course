import React from 'react';

import './custom-button.styles.scss';
export default function CustomButton({
  children,
  isGoogleSignIn,
  ...otherProps
}) {
  return (
    // type etc
    <button
      // will always render custom-button but conditional for google-sign-in
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
