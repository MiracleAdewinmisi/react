import React from 'react'

const DisplayTodo = ({allTodo}) => {
  return (
    <div>
        {allTodo.map((item, index)=>{
            <h2 key={index}>{item}</h2>
        })
        }
    </div>
  )
}

export default DisplayTodo