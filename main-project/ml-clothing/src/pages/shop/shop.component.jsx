import React from 'react';
import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

import './shop.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateTopProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateTopProps)(ShopPage);
