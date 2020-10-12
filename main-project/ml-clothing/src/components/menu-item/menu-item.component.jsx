import React from 'react';

//styles
import './menu-item.styles.scss';

export default function MenuItem({ title, imageUrl, size }) {
  //size if optional, will pass to class if there no need for checking
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu-item`}
    >
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}
