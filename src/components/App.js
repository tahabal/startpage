import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';


import './App.css';
import Boards from './Boards/Boards';
import Todo from './Todo/Todo';
import List from './List/List';
import ControlBar from './ControlBar/ControlBar';


var tab = <List />

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab: 1
        }

        this.changeTab = this.changeTab.bind(this)
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
            <div className="bg-gif">&nbsp;</div>
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
