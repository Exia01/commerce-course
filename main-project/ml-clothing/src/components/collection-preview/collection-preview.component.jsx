import React from 'react';

// styles
import './collection-preview.styles.scss';

export default function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4) //only 4 items can tell by index could use slice?
          .map((item) => {
            return (
              <div key={item.id} className=''>
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
}

// https://www.javascripttutorial.net/javascript-array-filter/ can pass index
