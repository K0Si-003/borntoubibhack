import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Footer from './Footer';

export default function AdsItem(props) {

const [ad, setAd] = useState({});

const currentId = props.match.params.id;

useEffect(() => {
  firebase.firestore().collection('adds').doc(currentId).get().then(doc => {
    setAd(doc.data())
  })}, [currentId])

return (
  <div>
    <h1>{ad.firstname}</h1>
    <Footer/>
</div>


);
}