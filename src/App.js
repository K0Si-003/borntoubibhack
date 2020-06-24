import React from 'react';
import './App.css';
import firebase from './firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Ads from './components/Ads';
import AdsItemSmall from './components/AdsItemSmall';
import Favorites from './components/Favorites';
import FAQ from './components/FAQ';

firebase.firestore().collection('times').add({
  title: 'Rubiks Cube',
  time_seconds: 45
})

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Test</h1>
        <AdsItemSmall />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/annonces'><Ads /></Route>
          <Route exact path='/annonces/:id' render={(routeProps) => <AdsItemSmall {...routeProps} />} />
          <Route exact path='/mes-recherches'><Favorites /></Route>
          <Route exact path='/FAQ'><FAQ /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
