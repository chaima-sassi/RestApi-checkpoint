import React from 'react'
import {useDispatch}from 'react-redux'
import { postcontact } from '../../redux/Actions/Actions'
import{Link} from 'react-router-dom'
import './addContact.css'

function AddContact({name , setName , age , setAge , email , setEmail}) {
  const dispatch=useDispatch()
  const adduser=()=>{
dispatch(postcontact ({name , age , email}))

  }
  return (
    <div>
       <form action="/action_page.php">
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

 <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Email" name="Name" id="Name" onChange={e=>setName(e.target.value)} required/>
    <label for="age"><b>Age</b></label>
    <input type="text" placeholder="Enter Age" name="Age" id="Age" onChange={e=>setAge(e.target.value)} required/>
    
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email"  onChange={e=>setEmail(e.target.value)} required/>

   
    <hr/>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

   <Link to={'/'}> <button type="submit" class="registerbtn" onClick={adduser}>Register</button></Link>
  </div>
  
</form>











        
    </div>
  )
}

export default AddContact