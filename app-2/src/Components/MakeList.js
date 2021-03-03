import React, {Component} from 'react';

export default class MakeList extends Component {
  constructor () {
    super();
    this.state={
      array: ['this','is','an','array','of','strings','that','also','make', 'an','excellent','list'],
    }
  }
  render () {
    const list = this.state.array.map(element => (
      <li>{element}</li>
    ))
    return (
      <ol>
        {list}
      </ol>
    )
  }
}