import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';


class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      businesses: [],
    };

  }

  searchYelp = (term, location, sortBy,radius) => {
    Yelp.searchYelp(term, location, sortBy,radius).then((businesses) => {
      this.setState({businesses: businesses});
    })
  }

  render = () => {

    const {searchYelp} = this;
    const {businesses} = this.state;

    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={searchYelp}/>
        <BusinessList businesses={businesses}/>
      </div>
    );
  }
}

export default App;