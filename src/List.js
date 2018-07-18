import React, { Component } from 'react';
import './List.css';
import list from './list.json';

export default class List extends Component {

    render(){
        return(
            <div className="animated">
                {
                list.map((list) => {
                    return (
                                <a className="listLink" style={{backgroundColor: list.color}} href={list.href}>
                                    {list.title}
                                </a>
                                );
                            
                })
                }
            </div>
        )
    }
}