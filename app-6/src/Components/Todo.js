import React from 'react';

export default function Todo (props) {
  const list = props.toDoList.map((element,index) => (
    <li key={index} accessKey={index} onClick={event => props.remove(event.target.accessKey)}>{element}</li>
  ))
  return (

    <ol>
      {list}
    </ol>
  )
}