import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import AdsItemSmall from './AdsItemSmall'

const Ads = () => {

  const [ads, setAds] = useState([])

  useEffect(() => {
    const loadAd = firebase.firestore().collection('adds').onSnapshot(s => {
      setAds(s.docs.map(task => {
        return {id: task.id, ...task.data()}
      }))
    })

    return () => loadAd()
  }, [])
 
    return (
        <div>
            {ads.map((ad)=> <AdsItemSmall ad={ad}/>)}
        </div>
    );
};

export default Ads;