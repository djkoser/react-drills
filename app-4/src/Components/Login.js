import React from 'react';
export default function Login(props) {
  return (
    <div>
      <label htmlFor='username'>Username</label>
      <input id='username' type='text' value={props.usernameState} onChange={event => props.usernameChange(event.target.value)}/>
      <label htmlFor ='password'>Password</label>
      <input id='password' type='password' value={props.passwordState} onChange={event => props.passwordChange(event.target.value)}/>
      <button onClick={props.submit}>Submit</button>
    </div>
  );
}