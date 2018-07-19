import React, { Component } from 'react';
import uuid from 'uuid';
import './Boards.css';

import boards from './boards.json';

export default class Boards extends Component{

    render(){
        return(
            <div className="boards">
                {
                    boards.map((board) => {
                        let id = uuid();
                        let href = "https://boards.4chan.org" + board.name
                        return(
                            <a href={href} 
                                key= {id}
                                className="boardItem" 
                                style={{backgroundColor: board.color}}
                                target="_blank">
                                {board.name}
                            </a>
                        );
                    })
                }
            </div>
        );
    }
}