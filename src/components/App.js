import React, { Component } from 'react';
import { Transition, animated } from 'react-spring'

import SimpleStorage from  'react-simple-storage';
import Switch from 'react-switch';

import './App.css';

import Boards from './Boards/Boards';
import Todo from './Todo/Todo';
import List from './List/List';
import { Time } from './Time/Time'
import ControlBar from './ControlBar/ControlBar';


const tabs = [
    style => <animated.div style={{ ...style}}><List /></animated.div>,
    style => <animated.div style={{ ...style}}><Boards /></animated.div>, 
    style => <animated.div style={{ ...style}}><Todo /></animated.div>
]

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab: 0,
            lights: false
        }

        this.changeTab = this.changeTab.bind(this)
        this.handleLights = this.handleLights.bind(this)
    }

    handleLights(lights) {
        this.setState({lights})
    }

    changeTab(next){
        this.setState({activeTab: next -1})
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
                        offHandleColor="#000308"
                        offColor="#01111b"
                        id="lights"
                    />
                </label>
            </div>
            <div className="content">
                <ControlBar changeTab={this.changeTab}/>
                <Transition
                    native
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0, pointerEvents: "none" }}>
                    {tabs[this.state.activeTab]}
                </Transition>
            </div>
            <Time />
        </div>
      );
    }
}

export default App;
