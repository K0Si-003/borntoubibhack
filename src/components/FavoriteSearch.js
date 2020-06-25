import React, { useContext } from 'react';
import DatasContext from './DatasContext';
import Searchbar from "../components/Searchbar";

const FavoriteSearch = () => {
    const {places,specialties, dates, durations} = useContext(DatasContext);

    console.log(places);

    return (
        <main>
            {places}
        </main>
    );
};

export default FavoriteSearch;