import React, {useEffect,useState} from 'react';
import Searchbar from "../components/Searchbar";

const FavoriteSearch = (props) => {
    const [searches, setSearches] = useState([])

    useEffect(() => {
       setSearches(JSON.parse(localStorage.getItem('localSearch')) || []);
    }, [])
    
    return (
        <main>
            <ul>
            {searches.map(s => <li key={s.id}>{s.place}</li>)}
            </ul>
        </main>
    );
};

export default FavoriteSearch;