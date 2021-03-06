import React, { useState, useEffect } from 'react';
import Searchbar from "../components/Searchbar";
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css';
import '../styles/home.css'
import MapComponent from '../components/Map';
import firebase from '../firebase';
import '../styles/home.css'

const Home = (props) => {


  const [ads, setAds] = useState([])

  useEffect(() => {
    const loadAd = firebase.firestore().collection('adds').onSnapshot(s => {
      setAds(s.docs.map(ad => {
        return { id: ad.id, ...ad.data() }
      }))
    })
    return () => loadAd()
  }, [])

  return (
    <main>
      <article className='textintro'
        style={{ fontFamily: 'Nunito', color: '#0596DE' }}>
        <Typewriter string='Toi aussi, jeune remplaçant... 😄' speed={80} />
      </article>
      <Searchbar datas={props.datas}
        handleSpecialtyChanged={props.handleSpecialtyChanged}
        renderSpecialtiesSuggestion={props.renderSpecialtiesSuggestion}
        handleSpecialtiesSelected={props.handleSpecialtiesSelected}
        handlePlaceChanged={props.handlePlaceChanged}
        renderSpecialtiesSuggestions={props.renderSpecialtiesSuggestions}
        handleSuggestionPlaces={props.handleSuggestionPlaces}
        handleSubmit={props.handleSubmit}
        handleChangeAdvanced={props.handleChangeAdvanced}
        handleClick={props.handleClick}
        handleChangecheck={props.handleChangecheck}
      />
      {/* </DatasContextProvider> */}
      <MapComponent adsDetails={ads} />
    </main>
  );
};

export default Home;
