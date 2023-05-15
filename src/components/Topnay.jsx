import React from 'react'
import './Topnay.css'
import { Link,NavLink } from 'react-router-dom'


export const Topnay = () => {
  return (
    <div className='navbaar'>
<div className='navbaar1'></div>

<Link to="/home">Home</Link> 
<Link to="/About">About</Link>
<Link to="/Contect">Contect</Link>
<Link to="/Experiences">Experiences</Link>
<Link to="/Project">Project</Link>
   
    </div>
    
  )
}
export default Topnay
