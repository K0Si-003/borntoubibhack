import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import AdsItemSmall from "./AdsItemSmall";
import "../styles/Ads.css";

const Ads = (props) => {
  const [ads, setAds] = useState([]);
  const specialty = "Ostéopathe";
  const start_date_timestamp_filter = 1593583200;
  console.log(start_date_timestamp_filter)

  useEffect(() => {
    if (start_date_timestamp_filter) {
      console.log('first condition')
      const unsubscribe = firebase
        .firestore()
        .collection("adds")
        .where("specialty", "==", `${specialty}`)
        .where("start_date", "==", `${start_date_timestamp_filter}`)
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
        .where("specialty", "==", `${specialty}`)
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
    <main className="ads ads-container">
      {ads.map((ad) => (
        <AdsItemSmall key={ad.id} ad={ad} />
      ))}
    </main>
  );
};

export default Ads;
