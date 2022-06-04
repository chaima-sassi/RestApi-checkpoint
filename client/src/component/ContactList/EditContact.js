import React from 'react'
import { useDispatch } from 'react-redux'
import { updatecontact } from '../../redux/Actions/Actions'
import { Link } from 'react-router-dom'

const EditContact = ({name , setName , age , setAge , email , setEmail , id , setId}) => {
    const dispatch=useDispatch()
    const edituser=()=> {
        dispatch(updatecontact(id,{name, age, email}))
    }
  return (
    <div>
   <form action="/action_page.php">
  <div class="container">
    <h1>EditContact</h1>
    <p>Please edit in this form to update your account.</p>
    <hr/>

 <label for="name"><b>Name</b></label>
    <input type="text" placeholder="Enter Email" name="Name" id="Name" value={name} onChange={e=>setName(e.target.value)} />
    <label for="age"><b>Age</b></label>
    <input type="text" placeholder="Enter Age" name="Age" id="Age" value={age}  onChange={e=>setAge(e.target.value)}/>
    
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" value={email} onChange={e=>setEmail(e.target.value)}/>
    <hr/>
  

  <Link to={'/'}> <button type="submit" class="registerbtn"  onClick={edituser}>update</button></Link>
  </div>
  
</form>




    </div>
  )
}

export default EditContact