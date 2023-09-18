import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import axios from 'axios'
const Signup = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [Password, setpassword] = useState("")
    

    const signUp = ()=>{
        axios.post("http://localhost:5000/Signup", {firstname, lastname, email,Password})
        console.log(firstname, lastname, email, Password)
    }
     
 
    
  return (
    <>
    
     <div className="container-fluid">
        <div className="row">
            <div className="col-6 mx-auto shadow-sm">
            <h1 className='text-center'>Student Portal</h1>
                <input type="text" placeholder="First Name" 
                className='form-control my-2'
                 onChange={(e)=> setfirstname(e.target.value) }/>
                <input type="text" placeholder="Last Name"
                className='form-control my-2'
                onChange={(e)=>setlastname(e.target.value)}/>
                <input type="text" placeholder="Email"
                className='form-control my-2'
                onChange={(e)=>setemail(e.target.value)}/>
                <input type="text" placeholder="Password"
                className='form-control my-2'
                onChange={(e)=>setpassword(e.target.value)}/>
        
                <button className='btn btn-info w-100 my-2' onClick={signUp}>Sign up</button>
            </div>
        </div>
     </div>
    </>
  )
}

export default Signup