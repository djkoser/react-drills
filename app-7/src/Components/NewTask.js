import React, {Component} from 'react';
export default class NewTask extends Component {
  constructor () {
    super(); 
    this.state={
      title:"",
      description:""
    }
    this.handlChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.clearFormEntry = this.clearFormEntry.bind(this)
  }

  handleChangeTitle(value) {
    this.setState({
      title:value
    })
  }

  handleChangeDescription(value) {
    this.setState({
      description:value
    })
  }

  clearFormEntry() {
    this.setState({
      title:"",
      description:""
    })
    this.props.addTask(this.state.title, this.state.description)
  }

  render () {
    return (
      <div>
        <input type='text' placeholder='Enter Task Title' value={this.state.title} onChange={event => this.handleChangeTitle(event.target.value)}></input>
        <input type='text' placeholder='Enter Task Description' value={this.state.description} onChange={event => this.handleChangeDescription(event.target.value)}></input>
        <button onClick={this.clearFormEntry}>Add To Do Item</button>
      </div>
    )
  }
}
