import React from 'react';
import { withRouter } from 'react-router-dom';

//styles
import './menu-item.styles.scss';

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  //size if optional, will pass to class if there no need for checking
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem); //hoc to have access to props related to the router
