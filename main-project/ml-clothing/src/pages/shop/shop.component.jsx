import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from './shop.data'; //collection data

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Used as starting data for ShopPage */
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state; //extraction from state
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
