import React from 'react';
import Cardlist from '../components/Cardlist'
import Searchbar from '../components/Searchbar'
import './App.css'
import Scroll from'../components/Scroll.js'
import ErrorBuoundry from '../components/ErrorBoundry.js'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots: users}))
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })   
            return (
                <div className= 'tc'>
                <div className= 'header'>
                    <h1 className= 'f1'>RoboFriends</h1>
                    <Searchbar searchChange = {this.onSearchChange}/>
                </div>
                <Scroll>
                    <ErrorBuoundry>
                         <Cardlist robots = {filteredRobots}/>
                    </ErrorBuoundry>
                </Scroll>                
                </div> 
                )
        }
        
    }

   

export default App