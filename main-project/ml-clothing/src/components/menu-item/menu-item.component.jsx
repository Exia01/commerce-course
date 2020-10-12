import React from 'react';

//styles
import './menu-item.styles.scss';

export default function MenuItem({ title, imageUrl, size }) {
  //size if optional, will pass to class if there no need for checking
  return (
    <div className={`${size} menu-item`}>
      {/* We want image to style within the size of the containing div */}
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}
