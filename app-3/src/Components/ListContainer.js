import React, {Component} from 'react';
import FilterBar from './FilterBar'

export default class ListContainer extends Component {
  constructor () {
    super();
    this.state={
      array: ['this','is','an','array','of','strings','that','also','make', 'an','excellent','list'],
      userInput:"",
      filteredArray: ['this','is','an','array','of','strings','that','also','make', 'an','excellent','list']
    };
    this.changeHandler=this.changeHandler.bind(this);
    this.filterList=this.filterList.bind(this);
  };

  changeHandler (value) {
    this.setState({
      userInput:value,
    })

  }

  filterList() {
    let userInputLc=this.state.userInput.toLowerCase(); 
    if (userInputLc===""){
      this.setState({
        userInput:"",
        filteredArray: this.state.array
      });
    } else {
      let arrayFiltered = this.state.array.filter(element=> element === userInputLc?true:false);
      this.setState({
        userInput:"",
        filteredArray: arrayFiltered,
    });
    };
  };

  render () {
    const list = this.state.filteredArray.map((element,index) => (
      <li key={index}>{element}</li>
    ))
    return (
      <div>
        <ol>
          {list}
        </ol>
        <FilterBar input={this.state.userInput} handler={this.changeHandler} submit={this.filterList}/>
      </div>
    )
  }
}