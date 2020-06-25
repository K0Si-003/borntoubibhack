import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import durationList from '../dayduration.json';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

const months = [
  {
    duration: "Moins d\'1 mois"
  },
  {
    duration: "1 mois"
  },
  {
    duration: "2 mois"
  },
  {
    duration: "3 mois"
  },
  {
    duration: "4 mois"
  },
  {
    duration: "5 mois"
  },
  {
    duration: "6 mois"
  },
  {
    duration: "7 mois"
  },
  {
    duration: "8 mois"
  },
  {
    duration: "10 mois"
  },
  {
    duration: "11 mois"
  },
  {
    duration: "12 mois"
  },
  {
    duration: "Plus d'1 an"
  },
];

class AdvancedSearch extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      date: new Date(),
      day: null

    }

    this.showMenu = this.showMenu.bind(this);
    this.getFullDate = this.getFullDate.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  getFullDate() {
    const day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    const year = new Date().getFullYear();
    const fullDate = `${year}-${month}-${day}`;
    return fullDate;
  };

  render() {
    return (
      <div className='main-advanced-search'>
        <button className='btn-advanced-search' onClick={this.showMenu}>
          Recherche avancée
        </button>

        {
          this.state.showMenu
            ? (
              <div className="inputs-advanced-search">
                <TextField
                  className='date-input advanced-search'
                  id='starting-date'
                  label='Date de début'
                  type='date'
                  variant='outlined'
                  name='date'
                  onChange={(e) => this.props.handleChangeAdvanced(e)}
                  value={this.props.datas.date}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    inputProps: { min: this.getFullDate() }
                  }}
                />



                <TextField
                  className='month-input advanced-search'
                  id="month"
                  select
                  label="Durée"
                  name='duration'
                  onChange={(e) => this.props.handleChangeAdvanced(e)}
                  value={this.props.datas.duration}
                  helperText="Nombre de mois"
                >
                  {months.map((option) => (
                    <MenuItem key={option.duration} value={option.duration}>
                      {option.duration}
                    </MenuItem>
                  ))}
                </TextField>
                <label>Avec logement </label>
                <input
                  checked={this.props.accomodation}
                  type="checkbox"
                  name="accomodation"
                  onChange={(e) => !this.props.handleChangecheck(e)}
                />


              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default AdvancedSearch;
