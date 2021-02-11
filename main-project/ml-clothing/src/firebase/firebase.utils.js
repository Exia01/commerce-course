import firebase from 'firebase/app'; //pulling the utility lib that we need

// base import enables this referencing firebase
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: 'crwn-db-16bcf.firebaseapp.com',
  databaseURL: 'https://crwn-db-16bcf.firebaseio.com',
  projectId: 'crwn-db-16bcf',
  storageBucket: 'crwn-db-16bcf.appspot.com',
  messagingSenderId: '228133959640',
  appId: '1:228133959640:web:e300fc745e078e8c3864ad',
  measurementId: 'G-BM0Q16XF0H',
};

firebase.initializeApp(config);
//configuring the firebase utility

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // async helper func checks for valid obj
  if (!userAuth) return; //if no user obj

  const userRef = firestore.doc(`users/${userAuth.uid}`); //Query reference, place we are querying --> simply represents the data

  const snapShot = await userRef.get(); //getting snapshot from doc reference with docRef method

  if (!snapShot.exists) {
    //meaning if this user doesn't exists
    //if it doesn't exists then create it
    const { displayName, email } = userAuth;
    const createdAt = new Date(); //new date obj current date and current time
    try {
      //document reference method
      await userRef.set({
        //creates the data in the db
        displayName,
        email,
        createdAt,
        ...additionalData, //passing along any additional data
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef; //in case we want to do anything with that data
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch(); //batch creation
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(); //we want to get the doc and create new one
    batch.set(newDocRef, obj);
  });

  batch.commit(); //will fire off batch req, returns a promise.

  return await batch.commit();
};
//will convert array returned to a map obj
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data(); //method that will get data
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    //loops through the initial object, sets the first value to the title and value,
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth(); //using auth import and initializing
export const firestore = firebase.firestore(); //using firestore and initializing

const provider = new firebase.auth.GoogleAuthProvider(); //gives access to library
provider.setCustomParameters({ prompt: 'select_account' }); //we want to trigger the google popup whenever we use the provider
export const signInWithGoogle = () => auth.signInWithPopup(provider); //takes in the provider class the we made in this case the google one

export default firebase;
