import React from 'react';
import { Link } from 'react-router-dom';
import AdvancedSearch from './AdvancedSearch';



export const Searchbar = (props) => {


    return (
        <form className='search-bar' onSubmit={(e) => props.handleSubmit(e)}>
            <div className='main-search'>
                <label className='search-label-specialty' htmlFor='search-input'>
                    <input
                        className='search-input-specialty'
                        type='text' placeholder='Ma spécialité'
                        value={props.datas.specialty}
                        onChange={props.handleSpecialtyChanged}
                        required
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
                <Link to='/annonces/search'>
                <input
                    type='submit'
                    className='input-submit submit-desktop'
                    value='Rechercher'
                />
                </Link>
            </div>

            <div className='advanced-search'>
                <AdvancedSearch
                    datas={props.datas}
                    handleChangeAdvanced={props.handleChangeAdvanced}
                    handleChangecheck={props.handleChangecheck}
                    handleClick={props.handleClick}
                />
                <Link to="/annonces/search">
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