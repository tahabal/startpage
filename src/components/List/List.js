import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import uuid from 'uuid';


import './List.css';
import list from './list.json';

export default class List extends Component {

    render(){
        return(
            <div>
                {
                list.map((list) => {
                    let id = uuid();
                    return (
                                <a target="_blank" 
                                    key={id}
                                    className="listLink" 
                                    style={{backgroundColor: list.color}} 
                                    href={list.href}>
                                    {
                                        list.icon ? (
                                            <Ionicon icon={list.icon} fontSize="50px" />
                                            ) : (
                                            list.title
                                            )
                                    }
                                </a>
                            );
                })
            }
            </div>
        )
    }
}