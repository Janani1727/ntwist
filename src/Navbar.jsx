import React from 'react'
import "./Navbar.css"
const Navbar = () => {

  return (

    <div className='navDiv'>
      <div>
        <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" />
      </div>

      <div className='navdivcontent'>
        <p>Home </p>
        <p>Industries</p>
        <p>AI software</p>
        <p>Blog</p>
        <p>Contact us</p>
      </div>
    </div>
  )
}

export default Navbar