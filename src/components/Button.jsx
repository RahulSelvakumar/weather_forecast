import React from 'react'

const Button = (props) => {
  return (
    <div className="button">
        <button onClick={props.onClick} value={props.value}>{props.value}</button>
    </div>
  )
}

export default Button