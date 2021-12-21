import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    };

    onSearchChange = (event) => { //Need to make this an arrow function so this will refer to where this function was created
        // otherwise this will refer to the event
        // the other option is onSearchChange(event) = 
        this.setState({ searchField: event.target.value });
        console.log(event.target.value);

    };

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        console.log(filteredRobots);
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        )
    }
};

export default App;