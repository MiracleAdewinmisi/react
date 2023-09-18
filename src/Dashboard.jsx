import React from 'react'

const Dashboard = ({allStudent}) => {
  return (
    <div>
        {allStudent.map((item, index)=>{
            <h2 key={index}>{item}</h2>
        })
        }
    </div>
  )
}

export default Dashboard