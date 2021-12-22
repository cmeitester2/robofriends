import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    };

    /*
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users })
            });
    }
    */

    async componentDidMount() {
        const users = await fetch('https://jsonplaceholder.typicode.com/users')
        const usersJson = await users.json();
        /* Code to delay execution by 7 seconds 
        var start = new Date().getTime();
        var end = start;
        while (end < start + 7000) {
            end = new Date().getTime();
        }
        */

        this.setState({ robots: usersJson })
    }

    onSearchChange = (event) => { //Need to make this an arrow function so this will refer to where this function was created
        // otherwise this will refer to the event
        // the other option is onSearchChange(event) = 
        this.setState({ searchField: event.target.value });
        //console.log(event.target.value);

    };

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        //console.log(filteredRobots);
        if (this.state.robots.length === 0) {
            return <h1>Loading....</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots} />
                </div>
            )
        }
    }
};

export default App;