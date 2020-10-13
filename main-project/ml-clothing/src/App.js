import React from 'react';
import { Switch, Route } from 'react-router-dom';
// switch will ensure only one renders one route. Gives more control over code
import Homepage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <main>
      <Switch>
        {/* route passes props only component deep */}
        <Route exact path='/' component={Homepage} /> 
        <Route path='/hats' component={HatsPage} />
      </Switch>
      <Homepage />
    </main>
  );
}

export default App;
