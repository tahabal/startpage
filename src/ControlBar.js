import React, { Component } from 'react';

import './ControlBar.css';

export default class ControlBar extends Component {
    constructor(props){
        super(props)
    }

    setActive(e) {
        console.log(e.target.value)
        this.props.changeTab(e.target.value)
    }

    render(){
        return(
            <div className="row controlBar">
                <div className="col-md controlBar-item" 
                onClick={() => this.setActive}
                value={1}
                >
                    YT
                </div>
                <div className="col-md controlBar-item"
                onClick={() => this.setActive}
                value={2}
                >
                    RDDT
                </div>
                <div className="col-md controlBar-item"
                onClick={() => this.setActive}
                value={3}
                >   4CH
                </div>
                <div className="col-md controlBar-item"
                onClick={() => this.setActive}
                value={4}
                >   SOC
                </div>
                <div className="col-md controlBar-item"
                onClick={() => this.setActive}
                value={5}
                >   LST
                </div>
            </div>
        );
    }
}