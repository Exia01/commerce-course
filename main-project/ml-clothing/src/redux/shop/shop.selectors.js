import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
  // ^func takes in shops and implict return
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections.find(
        // matching the url parameter of our collection id map
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
