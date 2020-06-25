import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

export default function AdsItem(props) {

  const [ad, setAd] = useState({});

  const currentId = props.match.params.id;

  useEffect(() => {
    firebase.firestore().collection('adds').doc(currentId).get().then(doc => {
      setAd(doc.data())
    })
  }, [currentId])

  return (
    <main>
      <h1>Détails de l'annonce</h1>
      <img src={ad.image}></img>
      <p>{ad.firstname} {ad.lastname}</p>
      <p>{ad.specialty}</p>
      <p>{ad.content}</p>
      <p>{ad.department}</p>
      <p>{ad.start_date}</p>
      <p>{ad.duration}</p>
      <p>{ad.isPonctual}</p>
      <p>{ad.accomodation ? 'Logement fourni' : 'Logement non-fourni'}</p>
      <p>{ad.accommodation && ad.atDomicile ? 'Logement chez le médecin' : 'Logement autres'}</p>

    </main>

  );
}