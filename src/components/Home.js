import React from "react";
import Searchbar from "../components/Searchbar";
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css';
import '../styles/home.css'


const Home = () => {
  return (
    <div>
      <div className='textintro'>
        <Typewriter string='Toi aussi, jeune remplaçant...' speed={2000} />
      </div>
        <Searchbar /> 
    </div>
  );
};

export default Home;
