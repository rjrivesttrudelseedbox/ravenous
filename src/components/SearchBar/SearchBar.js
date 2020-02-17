import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      term: "",
      location: "",
      sortBy:"best_match",
      radius: "",

    }

  
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass = (sortByOption) => {
    if (this.state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  }

  handleSortByChange = (sortByOption) => {
    this.setState({sortBy: sortByOption})
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy, this.state.radius)
    
  }

  handleTermChange = (event) => {
    this.setState({term: event.target.value})
  }

  handleLocationChange = (event) => {
    this.setState({location: event.target.value})
  }

  handleRadiusChange = (event) => {
    this.setState({radius: event.target.value})
  }

  handleSearch = (event) => {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy, this.state.radius)
    event.preventDefault()
  }
  
  renderSortByOptions = () => {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
    });
  }

  render = () =>{

    const {handleTermChange, handleLocationChange, handleSearch, handleRadiusChange } = this;
    const bob = ["aaaa","bbbb"];
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <form autocomplete="off" action={bob}>
            <input onChange={handleTermChange} placeholder="Search Businesses" />
            <input onChange={handleLocationChange}  autocomplete="on" placeholder="Where?" />
            <input onChange={handleRadiusChange} placeholder="distance by meter" />
          </form>
        </div>
        <div className="SearchBar-submit">
          <a href="" onClick={handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;