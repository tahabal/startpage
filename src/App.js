import React, { Component } from 'react';
import './App.css';
import  YoutubeSearch from './YoutubeSearch';
import ControlBar from './ControlBar';




class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab: 1
        }
    }

    changeTab(next){
        this.setState({activeTab: next})
    }

    render() {
      return (
        <div className="App">
            <div className="bg-gif">&nbsp;</div>
            <div className="content">
                <ControlBar changeTab={() => this.changeTab}/>
                <YoutubeSearch />
            </div>
        </div>
      );
    }
}

export default App;
