import React, {Component} from 'react'; 

export default class InputBox extends Component {
  constructor() {
    super();
    this.state = {
      userInput:""
    };
    this.handleChange= this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      userInput:value
    })
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.userInput}</h1>
        <input type='text' placeholder='Type Your Text to Display' onChange={event => this.handleChange(event.target.value)}/>
      </div>
    )
  }
}