import React from 'react';
import './App.css';
import firebase from './firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Ads from './components/Ads';
import AdsItem from './components/AdsItem';
import AdsFiltered from './components/AdsFiltered'
import FavoriteSearch from './components/FavoriteSearch';
import FAQ from './components/FAQ';
import departmentsList from './departments.json';
import specialtiesList from './specialties.json';
import './styles/searchbar.css';

firebase.firestore().collection('times').add({
  title: 'Rubiks Cube',
  time_seconds: 45
})

const departments = departmentsList.map(department => `${department.departmentName}`);
const specialties = specialtiesList.map(list => `${list.specialty}`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '',
      suggestionsPlaces: [],
      specialty: '',
      suggestionsSpecialties: [],
      date: null,
      duration: null,
      accomodation: false,
      tabLocalStorage: [],
      search: false
    };
  }
 


  /* Autocomplete for specialty */
  handleSpecialtyChanged = (e) => {
    const value = e.target.value;
    let autocompletions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      autocompletions = specialties.sort().filter(v => regex.test(v));
    }
    this.setState({ specialty: value })
    this.setState({ suggestionsSpecialties: autocompletions })
  }

  renderSpecialtiesSuggestions = () => {
    const { suggestionsSpecialties } = this.state;
    if (suggestionsSpecialties.length === 0) {
      return null;
    }
    return (
      <ul className='autocomplete'>
        {suggestionsSpecialties.slice(0, 5).map((item, index) => <li key={index} onClick={() => this.handleSpecialtiesSelected(item)}>{item}</li>)}
      </ul>
    );
  }

  handleSpecialtiesSelected = (value) => {
    this.setState({ specialty: value })
    this.setState({ suggestionsSpecialties: [] });
  }

  /* Autocomplete for location */
  handlePlaceChanged = (e) => {
    const value = e.target.value;
    let autocompletions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      autocompletions = departments.sort().filter(v => regex.test(v));
    }
    this.setState({ place: value });
    this.setState({ suggestionsPlaces: autocompletions })
  }

  handleSuggestionPlaces = (value) => {
    this.setState({ place: value })
    this.setState({ suggestionsPlaces: [] })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState( {
    //   place: '',
    //   suggestionsPlaces: [],
    //   specialty: '',
    //   suggestionsSpecialties: [],
    //   date: null,
    //   duration: null,
    //   accomodation: false,
    // })
  }

  /* Advanced search */
  handleChangeAdvanced = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChangecheck = (e) => {
    this.setState({ [e.target.name]: !!e.target.checked })
  }

  handleClick = (e) => {
    this.setState({tabLocalStorage:
      [...this.state.tabLocalStorage,
      {place: this.state.place,
      specialty: this.state.specialty,
      date: this.state.date,
      duration: this.state.duration}]
    })
    localStorage.setItem('localSearch', JSON.stringify(this.state.tabLocalStorage));
  }

  handleClick = (e) => {
    const { date, specialty, place, duration } = this.state;
    let existingSearches = localStorage.getItem('localSearch');
    if (existingSearches) {
      let parsedSearches = JSON.parse(existingSearches);
      parsedSearches.push({date, specialty, place, duration});
      localStorage.setItem('localSearch', JSON.stringify(parsedSearches));
    } else {
      localStorage.setItem('localSearch', JSON.stringify([{ date, specialty, place, duration }]));
    }
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home
                datas={this.state}
                handleSpecialtyChanged={this.handleSpecialtyChanged}
                renderSpecialtiesSuggestion={this.renderSpecialtiesSuggestion}
                handleSpecialtiesSelected={this.handleSpecialtiesSelected}
                handlePlaceChanged={this.handlePlaceChanged}
                renderSpecialtiesSuggestions={this.renderSpecialtiesSuggestions}
                handleSuggestionPlaces={this.handleSuggestionPlaces}
                handleSubmit={this.handleSubmit}
                handleChangeAdvanced={this.handleChangeAdvanced}
                handleClick={this.handleClick}
                handleChangecheck={this.handleChangecheck}
              />
            </Route>
            <Route exact path='/annonces'>
              <Ads
                datas={this.state}
                handleSpecialtyChanged={this.handleSpecialtyChanged}
                renderSpecialtiesSuggestion={this.renderSpecialtiesSuggestion}
                handleSpecialtiesSelected={this.handleSpecialtiesSelected}
                handlePlaceChanged={this.handlePlaceChanged}
                renderSpecialtiesSuggestions={this.renderSpecialtiesSuggestions}
                handleSuggestionPlaces={this.handleSuggestionPlaces}
                handleSubmit={this.handleSubmit}
                handleChangeAdvanced={this.handleChangeAdvanced}
              /></Route>
            <Route exact path='/annonces/search'> <AdsFiltered
              datas={this.state} 
              handleSpecialtyChanged={this.handleSpecialtyChanged}
              renderSpecialtiesSuggestion={this.renderSpecialtiesSuggestion}
              handleSpecialtiesSelected={this.handleSpecialtiesSelected}
              handlePlaceChanged={this.handlePlaceChanged}
              renderSpecialtiesSuggestions={this.renderSpecialtiesSuggestions}
              handleSuggestionPlaces={this.handleSuggestionPlaces}
              handleSubmit={this.handleSubmit}
              handleChangeAdvanced={this.handleChangeAdvanced}
            /></Route>
            <Route exact path='/annonces/:id' render={(routeProps) => <AdsItem {...routeProps} />} />
            <Route exact path='/mes-recherches'><FavoriteSearch /></Route>
            <Route exact path='/FAQ'><FAQ datas={this.state} /></Route>
          </Switch>
          <Footer />
        </div>
      </Router>

    );
  };
}

export default App;


