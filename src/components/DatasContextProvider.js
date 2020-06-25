import React, { useState, createContext } from 'react';
const DatasContext = createContext();

class DatasContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'zzzzzzzzzzzz',
      specialty: '',
      date: '',
      duration: ''
    };

  }
  render() {
    return (
      <DatasContext.Provider value={{...this.state}}>
        {this.props.children}
      </DatasContext.Provider>
    );
  };
}


export default DatasContextProvider
