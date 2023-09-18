import React from 'react'


const Hero = () =>{
  let mystyle ={
    color:"red",
    background: "black"

  }
  return (
    <div>Hero
      <h1 className='header'>Hey</h1>
        <p style={mystyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed at maiores, reiciendis necessitatibus, voluptate 
            eum aliquid tempora facere aperiam laboriosam quasi! Quibusdam iusto in velit. Harum vero sint amet autem!</p>
            <h1>Hey React</h1>
            <p>I love react, react loves me</p>
            <h3>{2*3}</h3>
    </div>
  
  )
}

export default Hero
