import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = (props) => (
  //we spread the props into the customButtonContainer, the logic on the button styling takes place on the the styled components 
  <CustomButtonContainer {...props} >
    {props.children}
  </CustomButtonContainer>
);

export default CustomButton;
