import React {Component} from 'react';

//Takes input from user and outputs to ToDo for additional processing
export default class NewTask extends Component {
  constructor () {
    super(); 
    this.state={
      titleInput="";
      descriptionInput="";
    }
  }

  condenseInput() {

  }
  render () {
    return (
      <div>
        <input type='text' placeholder = 'Enter Task Title' value={this.state.titleInput} ></input>
        <input type='text' placeholder = 'Enter Task Description' value={this.state.descriptionInput}></input>
        <button onClick={this.props.} >Add To Do Item</button>
      </div>
    )
  }
}