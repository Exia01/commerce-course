import { React } from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

//Hoc, Takes in Wrapped component
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner; // could skip the spinner and just return the code but its more explicit
};

export default WithSpinner;
