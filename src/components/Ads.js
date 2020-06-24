import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import AdsItemSmall from './AdsItemSmall'
import Footer from './Footer';

const Ads = () => {

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
        <div>
            {ads.map((ad)=> <AdsItemSmall ad={ad}/>)}
            <Footer/>
        </div>
    );
};

export default Ads;