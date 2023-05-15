import React from 'react'
import Topnay  from './Topnay'
import './Home.css'


import DackImg from './img/kamlesh.png';
// import About  from './Mainbox'
// import About, { Contect }  from './Contect'


export const Home = () => {
  return (
    <div>
         <div className='mainbox'>
        <div className='mainbox1'>
        <h1>My Name Is kamlesh</h1>
            <h3>Skills you'll gain: Full-Stack Web Development, Web Development, 
                Computer Programming, Back-End Web Development, Cloud Computing, 
                Front-End Web Development, HTML and CSS, Javascript, Cloud Applications,
                 Cloud Storage, Computer Programming Tools, Django (Web Framework), 
                Application Development, Data Management, Software Architecture, Software …</h3>
        </div>
        <div className='mainbox2'>
            <div className='img'>
            <img src={DackImg} alt="" />
        </div>
        </div>
    </div>

          
           {/* <Mainbox></Mainbox> */}
    </div>
  )
}
export default Home
