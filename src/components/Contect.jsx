import React, { useState } from 'react'
import './Contect.css'

  

export const Contect = () => {
  const[name,setname]=useState(''); 
  const[org_type,setorg_type]=useState('');
  const[org_name,setorg_name]=useState('');
  const[email,setemail]=useState('');
  const[msg,setmsg]=useState('');




  const[NameError,setNameError]=useState(false); 
  const[EmailError,setEmailError]=useState(false); 



  function isvalid(itemName, value){
    let nameRegex;
    if(itemName ==='name'){
      nameRegex = /[A-Za-z]{5,10}$/;
    }
    return nameRegex.test(value);
  }
  const onContect =()=>{
    
    if(isvalid('name',name)){
      setNameError(false);
    }
    else{
      setNameError(true);
    }
    console.log(name,org_type,org_name,email,msg);
  
  }

  return (
    
    <div className='centerform'>
     
    {/* <form>
        <h1>contect<span>Here</span></h1>
      
        <input type='text'name="Name"id="Name" placeholder='Enter Name'/>
        <input type='text'name="Email"id="Email" placeholder='Enter Email'/>
        <input type='text'name="mobile"id="mobile" placeholder='Enter mobile number'/>
        <textarea name="masag"id="masag" cols="30" rows="10" placeholder='Enter Description'/>
        <button type='submit'>Submit</button>


    </form> */}
    <div className='contact-form'>
    <div className='heading'>
        <h1>Contact Form</h1>
      </div>
      <label htmlFor=''>Name</label>
      <input id="name" className='input'  name="name"type="text"value={name} onChange={e=>setname(e.target.value)} required/>
      {NameError && <p style={{color:'red'}}> Enter a valid Name</p>}
      <label htmlFor=''>Ocuupation type</label>
      <input id="org_type"  className='input'name="org_type"type="text"value={org_type} onChange={e=>setorg_type(e.target.value)}/>

      <label htmlFor=''>Organization/instiute name</label>
      <input id="org_name"  className='input'name="org_name"type="text"value={org_name} onChange={e=>setorg_name(e.target.value)}/>
      <label htmlFor=''>Email</label>
      <input id="email"  className='input'name="email"type="text"value={email} onChange={e=>setemail(e.target.value)}/>

      <label htmlFor=''>Message</label>
      <textarea name='msg' id='msg'col='30'rows="10"value={msg} onChange={(e)=>setmsg(e.target.value)}></textarea>
      <div className='savebtn'>
      <button type="submit"onClick={onContect} className='button'>send</button>
    </div>
    </div>
   
    </div>
  )
}
export default Contect

