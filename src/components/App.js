import React, { Component } from 'react';
import SimpleStorage from  'react-simple-storage';
import Switch from 'react-switch';
import Moment from 'react-moment';
import 'moment-timezone';


import './App.css';
import Boards from './Boards/Boards';
import Todo from './Todo/Todo';
import List from './List/List';
import ControlBar from './ControlBar/ControlBar';


var tab = <List />
var classes = "bg-gif"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab: 1,
            lights: false
        }

        this.changeTab = this.changeTab.bind(this)
        this.handleLights = this.handleLights.bind(this)
    }

    handleLights(lights) {
        this.setState({lights})
    }

    changeTab(next){
        this.setState({activeTab: next})

        switch (next) {
            case 1:
                tab = <List />
                break;
        
            case 2:
                tab = <Boards />
                break;
            

            case 3:
                tab = <Todo />
                break;
            
            
            default:
                break;
        }
    }



    render() {
      return (
        <div className="App">
            <div className={this.state.lights ? "bg-gif lightsOn" : "bg-gif"}>&nbsp;</div>
            <div className="lightSwitch">
                <SimpleStorage parent={this} />
                <label htmlFor="lights">
                    <span>{this.state.lights ? "Too bright?" : "Too dark?"}</span>
                    <Switch
                        onChange={this.handleLights}
                        checked={this.state.lights}
                        id="lights"
                    />
                </label>
            </div>
            <div className="content">
                <ControlBar changeTab={this.changeTab}/>
                {tab}
            </div>
            <div class="time">
                <div class="hour">
                    <Moment 
                        interval={1000}
                        format="HH:mm" />
                </div>
                <div class="day">
                    <Moment
                        interval={60000}
                        format="dddd" />
                </div>
                <div class="date">
                    <Moment 
                        format="DD/MM/YY"
                        interval={60000}/>
                </div>
            </div>
        </div>
      );
    }
}

export default App;
