import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

// styles
import './collection-preview.styles.scss';

export default function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4) //only 4 items can tell by index could use slice?
          .map((item) => (
            //We want the whole item, no curly since we're not doing logic
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

// https://www.javascripttutorial.net/javascript-array-filter/ can pass index
