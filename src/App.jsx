

import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import Feed from './components/Feed'
import Library from './components/Library'
import Formik from './Formik'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Yup from './Yup'
const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='./about:id' element={<About/>}/> 
        <Route path='./feed' element={<Feed/>}/> 
        <Route path='./Library' element={<Library/>}/>  */}
        <Route path='/formik' element={<Formik/>}/>
        <Route path='/yup' element={<Yup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
    </div>
  )
}

export default App


