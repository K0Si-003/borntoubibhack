import React, { useState, useEffect } from 'react';
import Searchbar from "../components/Searchbar";
import MapComponent from '../components/Map';
import firebase from '../firebase';

const Home = () => {
  
  const [ads, setAds] = useState([])

  useEffect(() => {
    const loadAd = firebase.firestore().collection('adds').onSnapshot(s => {
      setAds(s.docs.map(ad => {
        return {id: ad.id, ...ad.data()}
      }))
    })
    return () => loadAd()
  }, [])

  return (
    <main>
      <Searchbar />
      <MapComponent adsDetails={ads}/>
    </main>
  );
};

export default Home;
