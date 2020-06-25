import React, { Component } from 'react';
import { TextField, Checkbox } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const months = [
  {
    duration: "Moins d'1 mois"
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
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      date: new Date(),
      day: null,
      month: null,
      logement: false

    }

    this.showMenu = this.showMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getFullDate = this.getFullDate.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
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

  render(props) {
    return (
      <>
        <div className='main-advanced-search' >
          <button className='btn-advanced-search' onClick={this.showMenu}>
            Recherche avancée
        </button>

          {
            this.state.showMenu
              ? (
                <div className="inputs-advanced-search" >
                  {this.props.component}

                  <TextField
                    className='date-input advanced-search'
                    id='starting-date'
                    label='Date de début'
                    type='date'
                    variant='outlined'
                    name='date'
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.date}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      inputProps: { min: this.getFullDate() }
                    }}
                  />
                  <Checkbox
                    value="checkedA"
                    inputProps={{ 'aria-label': 'Checkbox A' }}

                  />

                  <TextField
                    className='month-input advanced-search'
                    id="month"
                    select
                    label="Durée"
                    name='month'
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.month}
                    helperText="Nombre de mois"
                  >
                    {months.map((option) => (
                      <MenuItem key={option.duration} value={option.duration}>
                        {option.duration}
                      </MenuItem>
                    ))}
                  </TextField>

                </div>
              )
              : (
                null
              )
          }
        </div>

      </>
    );
  }
}

export default AdvancedSearch;