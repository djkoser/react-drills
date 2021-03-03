import React, {Component} from 'react';

export default function FilterBar (props) {
  return (
    <div>
      <input type="text" placeholder="Type Text to Filter the List" value={props.input} onChange={event => props.handler(event.target.value)}/>
      <button onClick={props.submit}>Filter List!</button>
    </div>
  )
}