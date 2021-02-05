import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from './../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';


import CollectionPreview from './../collection-preview/collection-preview.component';

function CollectionsOverview({ collections }) {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateTopProps = createStructuredSelector({
    collections: selectShopCollections,
  });

export default connect(mapStateTopProps)(CollectionsOverview)