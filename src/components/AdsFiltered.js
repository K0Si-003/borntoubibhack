import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import AdsItemSmall from "./AdsItemSmall";
import "../styles/AdsFiltered.css";
import { Link } from 'react-router-dom'

const Ads = (props) => {
  const [ads, setAds] = useState([]);
  const duration = props.datas.duration;
  const specialty = props.datas.specialty;
  const departement = props.datas.place;
  const accomodation = props.datas.accomodation;
  const date = props.datas.date
  const start_date_timestamp_filter = firebase.firestore.Timestamp.fromDate(
    new Date(date));


  useEffect(() => {
    if (specialty && departement && duration && accomodation ) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("duration", "==", duration)
        .where("departement", "==", departement)
        .where("accomodation", "==", true)
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    } else if (specialty && accomodation && departement) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("departement", "==", departement)
        .where("accomodation", "==", true)
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    } else if (accomodation && departement && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("duration", "==", duration)
        .where("departement", "==", departement)
        .where("accomodation", "==", true)
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    } else if (specialty && accomodation && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("duration", "==", duration)
        .where("accomodation", "==", true)
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    } else if (specialty && departement && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("duration", "==", duration)
        .where("departement", "==", departement)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });
      return () => unsubscribe();
    } else if (departement && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("duration", "==", duration)
        .where("departement", "==", departement)
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    } else if (specialty && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("duration", "==", duration)
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    } else if (accomodation && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("duration", "==", duration)
        .where("accomodation", "==", true)
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    } else if (accomodation && departement) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("departement", "==", departement)
        .where("accomodation", "==", true)
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    } else if (specialty && departement) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("departement", "==", departement)
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    } else if (accomodation && specialty) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("accomodation", "==", true)
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    } else if (specialty) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    } else if (departement) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("departement", "==", departement)
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    } else if (duration) {
      const unsubscribe = firebase
      .firestore()
      .collection("adds")
      .where("duration", "==", duration)
      .onSnapshot(handleSnapshot);

    return () => unsubscribe();
    } else if (accomodation) {
      const unsubscribe = firebase
      .firestore()
      .collection("adds")
      .where("accomodation", "==", true)
      .onSnapshot(handleSnapshot);

    return () => unsubscribe();
    } else {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .onSnapshot(handleSnapshot);

      return () => unsubscribe();
    }
  }, [accomodation, departement, duration, specialty]);

  const handleSnapshot = (s) => {
    const data = s.docs
    .map((ad) => {
      return { id: ad.id, ...ad.data() };
    })
    if (data.length === 0) {
      
    } 
    setAds(data);
  }
  const checkDate = (ads) => {
    if (start_date_timestamp_filter) {
      return ads.filter(ad => ad.start_date >= start_date_timestamp_filter)
    } else {
      return ads
    }
  }

  return (
    <main>
      {ads.length === 0 ? (
        <div className="ads no-results">
          <p>Aucun résultats pour votre recherche</p>
          <Link to='/annonces' className='btn-new-search'>Nouvelle recherche</Link>
        </div>
      ) : (
        <div className="ads ads-container">
          {checkDate(ads).map((ad) => (
            <AdsItemSmall key={ad.id} ad={ad} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Ads;
