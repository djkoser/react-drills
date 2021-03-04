import React, { Component } from 'react';
import Todo from './ToDo';

export default class List extends Component {


  render () {
      const toDoItems = this.props.toDoListState.map((element,index) => (<Todo remove={this.props.removeList} index={index} title ={element.title} description ={element.description}/>));
      return (
      <div>
        <ol>
          {toDoItems}
        </ol>
      </div>
    )
  }
}