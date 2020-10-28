import React from 'react';
import { Switch, Route } from 'react-router-dom';
// switch will ensure only one renders one route. Gives more control over code
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  componentDidMount() {
    this.getAuthUser();
  }

  unsubscribeFromAuth = null; //property class

  getAuthUser = () => {
    //gives us back a function, when class closes the subscription
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => { //async func
      //subscription?
      console.log('rendered');

      // this.setState({ currentUser: user });
      createUserProfileDocument(user)
    }); //takes func, param is what the user state is
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //will unsub from the listener
  }

  render() {
    // console.log(this.state.currentUser);
    console.log('rendered');
    return (
      <main>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          {/* route passes props only one component deep */}
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </main>
    );
  }
}

export default App;

// function App() {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     getAuthUser();
//     // auth.onAuthStateChanged((user) => {
//     // setCurrentUser(user);
//     // }); //takes func, param is what the user state is
//   }, [currentUser]); // Only re-run the effect if count changes

//   function getAuthUser() {
//      auth.onAuthStateChanged((user) => { //subscription?
//       console.log('rendered');
//       setCurrentUser(user);
//     }); //takes func, param is what the user state is
//   }
//   return (
//     <main>
//       <Header />
//       <Switch>
//         {/* route passes props only one component deep */}
//         <Route exact path='/' component={Homepage} />
//         <Route path='/shop' component={ShopPage} />
//         <Route path='/signin' component={SignInAndSignUpPage} />
//       </Switch>
//     </main>
//   );
// }

// export default App;
