import React from 'react'

const Button = (props) => {

    console.log(props);
  return (
    <div className={props.style}>{props.name}</div>
  )
}

export default Button