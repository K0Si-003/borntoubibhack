import React, { useState, useEffect, createContext, useContext } from 'react';
import Searchbar from "../components/Searchbar";
import MapComponent from '../components/Map';
import firebase from '../firebase';

const Home = (props) => {


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
    <main>  
      {/* <DatasContextProvider>  */}
        <Searchbar datas={props.datas} 
                handleSpecialtyChanged={props.handleSpecialtyChanged}
                renderSpecialtiesSuggestion={props.renderSpecialtiesSuggestion}
                handleSpecialtiesSelected={props.handleSpecialtiesSelected}
                handlePlaceChanged={props.handlePlaceChanged}
                renderSpecialtiesSuggestions={props.renderSpecialtiesSuggestions}
                handleSuggestionPlaces={props.handleSuggestionPlaces}
                handleSubmit={props.handleSubmit}/>
      {/* </DatasContextProvider> */}
      <MapComponent adsDetails={ads}/>
    </main>
  );
};

export default Home;
