import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import AdsItemSmall from './AdsItemSmall';
import '../styles/Ads.css';
import Searchbar from "../components/Searchbar";

const Ads = (props) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

    return () =>unsubscribe()
  }, [])
 
    return (
        <main className='ads ads-container'>
            <Searchbar />
            {ads.map((ad)=> <AdsItemSmall ad={ad}/>)}
        </main>
    );
};

export default Ads;
