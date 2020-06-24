import React from 'react';
import './App.css';
import firebase from './firebase';

firebase.firestore().collection('times').add({
  title: 'Rubiks Cube',
  time_seconds: 45
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Born toubib hack !!</h1>
      </header>
    </div>
  );
}

export default App;
