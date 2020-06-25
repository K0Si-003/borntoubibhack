import React from 'react';
import './App.css';
import firebase from './firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Ads from './components/Ads';
import AdsItem from './components/AdsItem';
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
        <Header />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/annonces'><Ads /></Route>
          <Route exact path='/annonces/:id' render={(routeProps) => <AdsItem {...routeProps} />} />
          <Route exact path='/mes-recherches'><Favorites /></Route>
          <Route exact path='/FAQ'><FAQ /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
