import './collection.styles.scss';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';


const CollectionPage = ({ collection }) => (
  <div className='category'>
    <h2>Collection Page</h2>
  </div>
);

// ownProps is props from component we're wrapping in
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  // passing the state is necessary because unlike other selectors, this selector needs a part of the state that depends on the url??? 
  // We are not using a createSelector so that requires us to pass the state
});
export default connect(mapStateToProps)(CollectionPage);
