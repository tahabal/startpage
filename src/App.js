import React, { Component } from 'react';
import './App.css';
import YoutubeSearch from './YoutubeSearch';
import Reddit from './Reddit';
import List from './List';
import ControlBar from './ControlBar';


var tab = <YoutubeSearch />

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab: 1
        }

        this.changeTab = this.changeTab.bind(this)
    }

    changeTab(next){
        console.log(next)
        this.setState({activeTab: next})

        switch (next) {
            case 1:
                tab = <YoutubeSearch />
                break;
        
            case 2:
                tab = <Reddit />
                break;
            

            case 3:
                tab = <YoutubeSearch />
                break;
            

            case 4:
                tab = <YoutubeSearch />
                break;

            case 5:
                tab = <List />
                break;
            
            
            default:
                break;
        }
    }



    render() {
      return (
        <div className="App">
            <div className="bg-gif">&nbsp;</div>
            <div className="content">
                <ControlBar changeTab={this.changeTab}/>
                {tab}
            </div>
        </div>
      );
    }
}

export default App;
