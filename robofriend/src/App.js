import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robot';
import SearchBox from './SearchBox';



class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);
        
    }


    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchchange={this.onSearchchange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}
    



export default App;