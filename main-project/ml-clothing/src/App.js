import React from 'react';
import { Switch, Route } from 'react-router-dom';
// switch will ensure only one renders one route. Gives more control over code
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        {/* route passes props only one component deep */}
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />

      </Switch>
    </main>
  );
}

export default App;
