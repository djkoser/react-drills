export default function Login(props) {
  return (
    <input type='text' value={props.usernameState} onChange={event => props.usernameChange(event.target.value)}/>
    <input type='password' value={props.passwordState} onChange={event => props.passwordChange(event.target.value)}/>
  );
}