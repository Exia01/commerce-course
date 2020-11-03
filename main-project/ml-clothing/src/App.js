import React from 'react';
import { Switch, Route } from 'react-router-dom';
// switch will ensure only one renders one route. Gives more control over code

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null; //property class
  //gives us back a function, when class closes the subscription
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        //if the user exists meaning not null
        const userRef = await createUserProfileDocument(userAuth);//using the returned userRef obj

        //the moment our code runs it, it will still send us an snapshot
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id, //identifies current user on the db
              ...snapShot.data()//obj with all the properties of of the user
            }
          });

          console.log(this.state);
        });
      }
      //if the user obj comes back null
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();//will unsub from the listener
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
