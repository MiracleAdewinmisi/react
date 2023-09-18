import React from 'react'
import {Link} from 'react-router-dom'

const Feed = () => {
  return (
    <div>
        <nav>
        <Link to='.feed/short'>short</Link>
        <Link to='.feed/footer'>footer</Link>
        <Link to='/feed'>feed</Link>
        </nav>

        <Routes>
        <Route path='/short' element={<Short/>}/> 
        <Route path='./footer' element={<Footer/>}/> 
            </Routes>
    </div>
  )
}

export default Feed