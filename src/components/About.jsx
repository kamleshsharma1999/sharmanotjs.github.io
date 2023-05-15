import React from 'react'
import './About.css'
import kamlesh from './img/kamlesh.png';
import map from './img/map.jpg';
import imgopjective from './img/company.png';
import kamleshcvpdf from './kamleshpdf.pdf';

export const About = () => {
  return (
    <div className='about'>
      <div className='about1'>
        <div className=''>
          <img src={kamlesh} className='myimg' alt="" />

        </div>
        <div className='contect'>
          <h2>Name: <span className='span1'>kamlesh sharma</span></h2>
          <h2>Emali: <span className='span1'>kamleshsharma2630@gmail.com</span></h2>
          <h2>Mobile: <span className='span1'>8118802128</span></h2>
          <h2>Address: <span className='span1'>Village Dalpura, jaipur</span></h2>
          <h2>Post: <span className='span1'>kishanpura</span></h2>
          <h2>Pin Code: <span className='span1'>302012</span></h2>
          <h2>State: <span className='span1'> Rajasthan</span></h2>
          <div className='fff'>
            <img src={map} className='map' alt="" />
          </div>
          <div className='but1'>
            <a href={kamleshcvpdf} target='_blank' rel="fdsddsfj" download="kamleshchoudhary">
          <button className='but'>Open pdf</button></a>
          </div>
          
<div class="w3-container">
  <h2>W3.CSS Modal</h2>
  <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-black">Open Modal</button>

  <div id="id01" class="w3-modal">
    <div class="w3-modal-content">
      <div class="w3-container">
        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
        <p>Some text. Some text. Some text.</p>
        <p>Some text. Some text. Some text.</p>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
      <div className='about2'>
        <div className='about_me'><h2>About Me....</h2></div>
        <div className='objective'><h3>Objective</h3>
          <p>A resume objective for a web developer is a statement that appears
            at the top of your resume that tells a hiring manager what makes you
            unique and why they should hire you for their open position. This is
            the location where you'll combine your skills, education, experience
            and other enticing attributes of yours so a hiring manager can compare
            you to the competition and decide to move forward with you in the next
            step of the hiring process.</p>
          <div className='imgopjective'>
            <img src={imgopjective} className='maibvv' alt="" />

          </div>
          <div className='objective'><h3>Skills </h3>  </div>
          <h3>HTMl.CSS-JavScript-DBMS-php </h3>
          <div className='objective'><h3>INTERNSHIP </h3>
          <h4>One Click IT (ClickFirst Techwrld & Internship)</h4>
          <p>WebIncepted in 2022, One Click IT Hub & Solution is a leading
             Development & Internship company providing superior 
            Software, Web, Mobile and Creative Designing solutions …</p> 
            
        <div className='objective'><h3>Front-end vs. back-end web development </h3>
        <p>Even if you’re new to web development, you’ve probably heard the terms “front-end development” and “back-end development” before. But what do they mean?

Front-end web development has to do with the interface that you, the user, interact with when you visit a website or use a web application. Front-End Developers create 
everything you see on a web page, including:</p></div> 
        </div>
       
        
          

        </div>


      </div>


    </div>

  )
}
export default About
