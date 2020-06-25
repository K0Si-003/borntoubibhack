import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import AdsItemSmall from "./AdsItemSmall";
import "../styles/AdsFiltered.css";
import Searchbar from "./Searchbar";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom'

const Ads = (props) => {
  console.log(props.datas)
  const [ads, setAds] = useState([]);
  const duration = props.datas.duration;
  const specialty = props.datas.specialty;
  const departement = props.datas.place;
  const accomodation = true;
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
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (specialty && accomodation && departement) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("departement", "==", departement)
        .where("accomodation", "==", true)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (accomodation && departement && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("duration", "==", duration)
        .where("departement", "==", departement)
        .where("accomodation", "==", true)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (specialty && accomodation && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("duration", "==", duration)
        .where("accomodation", "==", true)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

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
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (specialty && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("duration", "==", duration)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (accomodation && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("duration", "==", duration)
        .where("accomodation", "==", true)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (accomodation && departement) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("departement", "==", departement)
        .where("accomodation", "==", true)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (specialty && departement) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("departement", "==", departement)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (accomodation && specialty) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("accomodation", "==", true)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (specialty) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (departement) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("departement", "==", departement)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (duration) {
      const unsubscribe = firebase
      .firestore()
      .collection("adds")
      .where("duration", "==", duration)
      .onSnapshot((s) => {
        setAds(
          s.docs.map((ad) => {
            return { id: ad.id, ...ad.data() };
          })
        );
      });

    return () => unsubscribe();
    } else if (accomodation) {
      const unsubscribe = firebase
      .firestore()
      .collection("adds")
      .where("accomodation", "==", true)
      .onSnapshot((s) => {
        setAds(
          s.docs.map((ad) => {
            return { id: ad.id, ...ad.data() };
          })
        );
      });

    return () => unsubscribe();
    } else {
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

      return () => unsubscribe();
    }
  }, []);

  return (
    <main>
      {ads.length === 0 ? (
        <div className="ads no-results">
          <p>Aucun résultats pour votre recherche</p>
          <Link to='/annonces' className='btn-new-search'>Nouvelle recherche</Link>
        </div>
      ) : (
        <div className="ads ads-container">
          {ads.map((ad) => (
            <AdsItemSmall key={ad.id} ad={ad} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Ads;
