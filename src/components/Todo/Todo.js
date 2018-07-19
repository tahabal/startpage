import React, { Component } from 'react';
import SimpleStorage from  'react-simple-storage';
import Moment from 'react-moment';

import 'moment-timezone';

import './Todo.css';

const moment = require('moment');

export default class Todo extends Component{
    constructor(props) {
        super(props)
        this.state = {
            newItem: "",
            list: []
        }
    }

    updateInput(key, value) {
        // update react state
        this.setState({ [key]: value });
      }
    
      addItem(e) {
          e.preventDefault();
        // create a new item
        let date = moment();
        const newItem = {
          id: 1 + Math.random(),
          value: this.state.newItem.slice(),
          date: date
        };
    
        // copy current list of items
        const list = [...this.state.list];
    
        // add the new item to the list
        list.push(newItem);
    
        // update state with new list, reset the new item input
        this.setState({
          list,
          newItem: ""
        });
      }
    
      deleteItem(id) {
        // copy current list of items
        const list = [...this.state.list];
        // filter out the item being deleted
        const updatedList = list.filter(item => item.id !== id);
    
        this.setState({ list: updatedList });
      }

    render(){
        return(
            <form className="todo">
                <SimpleStorage parent={this} />

                <input
                    type="text"
                    placeholder="What's the plan, boss?"
                    value={this.state.newItem}
                    className="todoInput"
                    onChange={e => this.updateInput("newItem", e.target.value)}
                />
                <button
                    onClick={(e) => this.addItem(e)}
                    disabled={!this.state.newItem.length}
                    className="todoButton"
                >
                    &#43; Add
                </button>

                <ul className="todoList">
                    {this.state.list.map(item => {
                    return (
                        <li key={item.id} 
                            className="todoItem"
                            onClick={() => this.deleteItem(item.id)}>
                        {item.value}
                            <Moment fromNow className="todoDate">
                                {item.date}
                            </Moment>
                        </li>
                    );
                    })}
                </ul>
            </form>
        );
    }
}