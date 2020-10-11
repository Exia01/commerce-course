import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };

    // we're binding the name on the left to the right one
    this.handleSearchChange = this.handleSearchChange.bind(this); //bind on ;'this' scope
  }

  //We could bind or do this arrow func since there is this.setState inside there is lexical scoping, meaning binds it to the place there were scoped
  handleSearchFieldChange = (e) => {
    //This will be updated asynchronously
    this.setState({ ...this.state, searchField: e.target.value }, () => {
      // callback in case we want to execute logic after state updates
      // console.log(this.state);
    });
  };

  handleSearchChange(e) {
    // unless we bind, we don't se the scope of 'this' state
    this.setState({ ...this.state, searchField: e.target.value }, () => {
      // callback in case we want to execute logic after state updates
      // console.log(this.state);
    });
  }

  filterOutMonsters = () => {};

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }
  render() {
    // destructuring
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((currentMonster) => {
      //Checking to see if current search term is in the currentMonster name
      // console.log(
      //   currentMonster.name.toLowerCase().includes(searchField.toLowerCase())
      // );
      return currentMonster.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleSearchFieldChange}
          placeholder='Search Monsters'
        />
        <CardList monsters={filteredMonsters}> </CardList>
      </div>
    );
  }
}

export default App;
