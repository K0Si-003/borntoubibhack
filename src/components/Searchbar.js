import React, { useState, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import AdvancedSearch from './AdvancedSearch';



export const Searchbar = (props) => {
//   const renderPlacesSuggestions = () => {
//     const { suggestionsPlaces } = this.state;
//     if (suggestionsPlaces.length === 0) {
//       return null;
//     }
//     return (
//       <ul className='autocomplete'>
//         {suggestionsPlaces.slice(0, 5).map((item, index) => <li key={index} onClick={() => this.handleSuggestionPlaces(item)}>{item}</li>)}
//       </ul>
//     );
//   }

  return (
    <form className='search-bar' onSubmit={(e) => props.handleSubmit(e)}>
      <div className='main-search'>
        <label className='search-label-specialty' htmlFor='search-input'>
          <input
            className='search-input-specialty'
            type='text' placeholder='Ma spécialité'
            value={props.datas.specialty}
            onChange={props.handleSpecialtyChanged}
          />
          <ul className='autocomplete'>
        {props.datas.suggestionsSpecialties.slice(0, 5).map((item, index) => <li key={index} onClick={() => props.handleSpecialtiesSelected(item)}>{item}</li>)}
      </ul>

        </label>

        <label className='search-label-place' htmlFor='search-input'>
          <input
            className='localization-input-specialty'
            type='text' placeholder='Mon département'
            value={props.datas.place}
            onChange={props.handlePlaceChanged}
          />
      <ul className='autocomplete'>
        {props.datas.suggestionsPlaces.slice(0, 5).map((item, index) => <li key={index} onClick={() => props.handleSuggestionPlaces(item)}>{item}</li>)}
      </ul>
        </label>
        <input
          type='submit'
          className='input-submit submit-desktop'
          value='Rechercher'
        />
      </div>

      <div className='advanced-search'>
        <AdvancedSearch />
        <Link to="/annonces">
        <input
          type='submit'
          className='input-submit submit-mobile'
          value='Rechercher'
        />
        </Link>
      </div>
    </form>
  );
};
export default Searchbar;