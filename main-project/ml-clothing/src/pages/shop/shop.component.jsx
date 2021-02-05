import './shop.styles.scss';
import { Route } from 'react-router-dom';

import CollectionsOverview from './../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    {/* shop page is a routed component, getting match from props  and separate by category*/}
    <Route exact path={`${match.path}`} component={CollectionsOverview} />

    {/* Route Name is a parameter, accessing string in param to figure which category to use */}
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
