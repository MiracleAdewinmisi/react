import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react'


function SignIn ({addStudents}) {
  const [newStudent, setnewStudent] = useState("")
  return (
    <div>
      <input type="text" onChange={(e)=>setnewStudent(e.target.value)} placeholder='Enter to do'/>
      <button onClick={()=>addStudents(newStudent)} className='btn btn-info'>Sign in</button>
    </div>
  )
}

export default SignIn