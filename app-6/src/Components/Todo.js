import React from 'react';

export default function Todo (props) {
  return (
    <li key={props.index} accessKey={props.index} onClick={event => props.remove(event.target.accessKey)}>{props.element}</li>
  )
}