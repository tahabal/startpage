import React, { Component } from 'react';

import './ControlBar.css';

export default class ControlBar extends Component {

    constructor(props) {
        super(props)
        this.state={tab: 1}
    }

    setActive(e, next) {
        this.setState({tab: next})
        this.props.changeTab(next)
    }

    render(){
        return(
            <div className="controlBar">
                <div className="col-md controlBar-item" 
                onClick={(e) => this.setActive(e, 1)}
                >
                    STUFF
                </div>
                <div className="col-md controlBar-item"
                onClick={(e) => this.setActive(e, 2)}
                >   BOARDS
                </div>
                <div className="col-md controlBar-item"
                onClick={(e) => this.setActive(e, 3)}
                >   TO-DO
                </div>
            </div>
        );
    }
}