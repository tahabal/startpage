import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import './List.css';
import list from './list.json';

export default class List extends Component {

    render(){
        return(
                list.map((list) => {
                    return (
                                <a target="_blank" 
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
        )
    }
}