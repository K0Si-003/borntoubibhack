import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import AdsItemSmall from './AdsItemSmall'
import Footer from './Footer';
import '../styles/Ads.css';

const Ads = () => {

  const [ads, setAds] = useState([])

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('adds').onSnapshot(s => {
      setAds(s.docs.map(ad => {
        return {id: ad.id, ...ad.data()}
      }))
    })

    return () =>unsubscribe()
  }, [])
 
    return (
        <div className='ads ads-container'>
            {ads.map((ad)=> <AdsItemSmall ad={ad}/>)}
            <Footer/>
        </div>
    );
};

export default Ads;