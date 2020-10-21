import React from 'react';

import './form-input.styles.scss';
export default function FormInput({ handleChange, label, ...otherProps }) {
  //other props will be spread out onto the component, no need to isolate
  return (
    <div className='group'>
      <input
        type='text'
        className='form-input'
        onChange={handleChange}
        {...otherProps} //name, type, value, required, etc

        //if we pass label then generate
      />{' '}
      {label ? (
        <label
          className={`${otherProps.value.length}? 'shrink:'' form-input-label`} //will add shrink prop whenever the user has typed anything in
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
