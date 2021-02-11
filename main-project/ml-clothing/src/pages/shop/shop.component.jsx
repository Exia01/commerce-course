import React from 'react';
import './shop.styles.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from './../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore } from '../../firebase/firebase.utils';
import { convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils';
import { updateCollections } from './../../redux/shop/shop.actions';

import WithSpinner from './../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    //we could make the api call here and then dispatch it to load the reducer
    const collectionRef = firestore.collection('collections'); //name of collection
    //whenever collection updates or gets
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);

      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const {loading} = this.state
    return (
      <div className='shop-page'>
        {/* shop page is a routed component, getting match from props  and separate by category*/}
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props}/>
          )}
        />

        {/* Route Name is a parameter, accessing string in param to figure which category to use */}
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props}/>
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
