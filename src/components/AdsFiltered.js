import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import AdsItemSmall from "./AdsItemSmall";
import "../styles/AdsFiltered.css";
import Searchbar from "./Searchbar";

const Ads = (props) => {
  const [ads, setAds] = useState([]);
  const duration = "";
  const specialty = "";
  const departement = "";
  const start_date_timestamp_filter = firebase.firestore.Timestamp.fromDate(
    new Date("2019-06-30")
  );

  useEffect(() => {
    if (specialty && start_date_timestamp_filter && departement && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("duration", "==", duration)
        .where("departement", "==", departement)
        .where("start_date", ">=", start_date_timestamp_filter)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (specialty && start_date_timestamp_filter && departement) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("departement", "==", departement)
        .where("start_date", ">=", start_date_timestamp_filter)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (start_date_timestamp_filter && departement && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("duration", "==", duration)
        .where("departement", "==", departement)
        .where("start_date", ">=", start_date_timestamp_filter)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (specialty && start_date_timestamp_filter && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("duration", "==", duration)
        .where("start_date", ">=", start_date_timestamp_filter)
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
    } else if (start_date_timestamp_filter && duration) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("duration", "==", duration)
        .where("start_date", ">=", start_date_timestamp_filter)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (specialty && start_date_timestamp_filter) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", specialty)
        .where("start_date", ">=", start_date_timestamp_filter)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (start_date_timestamp_filter && departement) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("departement", "==", departement)
        .where("start_date", ">=", start_date_timestamp_filter)
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
    } else if (start_date_timestamp_filter) {
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("start_date", ">=", start_date_timestamp_filter)
        .onSnapshot((s) => {
          setAds(
            s.docs.map((ad) => {
              return { id: ad.id, ...ad.data() };
            })
          );
        });

      return () => unsubscribe();
    } else if (duration) {
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
          <p>Nouvelle recherche</p>
          <Searchbar />
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
