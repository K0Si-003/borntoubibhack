import React, { useState } from 'react';
import departmentsList from '../departments.json';
import specialtiesList from '../specialties.json';
import '../styles/searchbar.css';

const departments = departmentsList.map(department => `${department.departmentName}, ${department.regionName}`);
const specialties = specialtiesList.map(list => `${list.specialty}`);

const Searchbar = () => {
    const [place, setPlace] = useState('')
    const [suggestionsPlaces, setSuggestionsPlaces] = useState([])
    const [specialty, setSpecialty] = useState('')
    const [suggestionsSpecialties, setSuggestionsSpecialties] = useState([])

/* Autocomplete for specialty */
    const handleSpecialtyChanged = (e) => {
        const value = e.target.value;
        let autocompletions = [];
        if (value.length > 0) {
          const regex = new RegExp(`^${value}`, 'i');
          autocompletions = specialties.sort().filter(v => regex.test(v));
        }
            setSpecialty(value);
            setSuggestionsSpecialties(autocompletions)
      }

    const renderSpecialtiesSuggestions = () => {
        if (suggestionsSpecialties.length === 0) {
          return null;
        }
        return (
          <ul className='autocomplete'>
            {suggestionsSpecialties.slice(0, 5).map((item, index) => <li key={index} onClick={() => handleSpecialtiesSelected(item)}>{item}</li>)}
          </ul>
        );
      }

    const handleSpecialtiesSelected = (value) => {
        setSpecialty(value);
        setSuggestionsSpecialties([]);
    }

/* Autocomplete for location */
    const handlePlaceChanged = (e) => {
        const value = e.target.value;
        let autocompletions = [];
        if (value.length > 0) {
        const regex = new RegExp(`^${value}`, 'i');
        autocompletions = departments.sort().filter(v => regex.test(v));
        }
            setPlace(value);
            setSuggestionsPlaces(autocompletions)
    }

    const renderPlacesSuggestions = () => {
        if (suggestionsPlaces.length === 0) {
            return null;
        }
        return (
        <ul className='autocomplete'>
            {suggestionsPlaces.slice(0, 5).map((item, index) => <li key={index} onClick={() => handleSuggestionPlaces(item)}>{item}</li>)}
        </ul>
        );
    }

    const handleSuggestionPlaces = (value) => {
        setPlace(value);
        setSuggestionsPlaces([]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <form className='search-bar' onSubmit={(e) => handleSubmit(e)}>
            <label className='search-label-specialty' htmlFor='search-input'>
                <input
                className='search-input-specialty'
                type='text' placeholder='Ma spécialité'
                value={specialty}
                onChange={handleSpecialtyChanged}
                />
                {renderSpecialtiesSuggestions()}
                </label>
                <i className="fas fa-search search-icon"></i>
            <label className='search-label-place' htmlFor='search-input'>
                <input
                type='text' placeholder='Mon lieu géographique'
                value={place}
                onChange={handlePlaceChanged}
                />
                {renderPlacesSuggestions()}
                </label>
                <i className='fas fa-map-marker-alt location-icon' id='iconmobile' />
                <input id='searchbutton'
                type='submit'
                className='input-submit'
                value='Rechercher' />
        </form>
    );
};

export default Searchbar;