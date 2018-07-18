import React, { Component } from 'react';
import './Boards.css';

import boards from './boards.json';

export default class Boards extends Component{

    render(){
        return(
            <div className="boards">
                {
                    boards.map((board) => {
                        let href = "https://boards.4chan.org" + board.name
                        return(
                            <a href={href} className="boardItem" style={{backgroundColor: board.color}}>
                                {board.name}
                            </a>
                        );
                    })
                }
            </div>
        );
    }
}