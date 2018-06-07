import React, { Component } from 'react';
import './App.css';

import list from './list'



class App extends Component {
  constructor() {
    super();
    this.state = {
      list
    }
  }
  handleClick( e, idx ) {
    let list = this.state.list;
        list[idx].complete = e.target.checked;
        this.setState({ list });
  }
  handleDel( idx ) {
    let list = this.state.list;
        list.splice( idx, 1 );
        this.setState({ list });
  }
  item( item, idx ) {
    return (
      <li key = { 'li_' + idx } >
        <div className = "left">
          <input type = "checkBox" defaultChecked = { item.complete } onClick = { ( e )=>{ this.handleClick( e, idx ) } } id = { 'checkBox_' + idx }/>
          <label htmlFor = { 'checkBox_' + idx } className = { item.complete ? 'complete' : undefined } >{ item.task }</label>
        </div>
        <div className = "right">
          <input type = "button" value = "删除" onClick = { (  )=>{ this.handleDel( idx ) } }/>
        </div>
      </li>
    )   
  }
  render() {
    return (
      <div className="App">
        <h3>todoList</h3>
        <ul className="list-container">
          {
            this.state.list.map(this.item.bind(this))
          }
        </ul>
      </div>
    );
  }
}

export default App;
