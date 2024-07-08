import React from 'react'
import '../App.css'
function Button(props) {
  return (
    <button onClick={props.callApi}>Click to generate Joke</button>
  )
}

export default Button