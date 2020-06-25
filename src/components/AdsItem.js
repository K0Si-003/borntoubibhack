import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import '../styles/AdsItem.css';
import MapComponent from './Map';
// import moment from 'moment';

export default function AdsItem(props) {

  const [ad, setAd] = useState({});

  const currentId = props.match.params.id;

  useEffect(() => {
    firebase.firestore().collection('adds').doc(currentId).get().then(doc => {
      setAd(doc.data())
    })
  }, [currentId])

  // const getDate = (timestamp) => {
  //     const start_date = moment.unix(timestamp).format("DD MMMM YYYY");
  // }

  // const timestamp = ad.start_date.seconds;
  // const start_date = moment.unix(timestamp).format("DD MMMM YYYY");

  return (
    <main className='details-container'>
      <h1 className='details-title'>Détails de l'annonce</h1>
      <article className='details-content'>
        <section className='details-infos'>
          <ul>
            <li><strong>Nom :</strong> {ad.firstname} {ad.lastname}</li>
            <li><strong>Spécialité :</strong> {ad.specialty}</li>
            <li><strong>Durée du remplacement :</strong> {ad.duration}</li>
            <hr />
            <li>{ad.isPonctual ? 'Remplacement fixe' : 'Remplacement occasionnel'}</li>
            <li>{ad.accomodation ? 'Logement fourni' : 'Logement non-fourni'}</li>
            <li>{ad.atDomicile ? 'Consultation à domicile' : 'Consultation au cabinet'}</li>
            <li>{ad.content}</li>
            <li>{ad.departement}</li>
          </ul>
        </section>
        <section className='details-image'>
          <img src={ad.image}></img>
        </section>
      </article>
      <article className='details-map'>
      </article>
      
      {/* <p>{start_date}</p> */}
      {/* <p>{getDate(ad.start_date.seconds)}</p> */}
    </main>
  );
}