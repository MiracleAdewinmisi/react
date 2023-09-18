

import React, {useState} from 'react'


function Todo ({addTodo}) {
  const [newTodo, setnewTodo] = useState("")
  return (
    <div>
      <input type="text" onChange={(e)=>setnewTodo(e.target.value)} placeholder='Enter to do'/>
      <button onClick={()=>addTodo(newTodo)} className='bg-green-400'>Add Todo</button>
    </div>
  )
}

export default Todo