import React from 'react'
import { useDispatch } from 'react-redux'
import { removecontact } from '../../redux/Actions/Actions'
import { postcontact } from '../../redux/Actions/Actions'
import { Link } from 'react-router-dom'
import './contactcard.css'

const ContactCard = ({el,getuser}) => {
    const dispatch=useDispatch()
    const deletecontact=()=>{
        dispatch(removecontact(el._id))
    }

  return (
    <div>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="container">
    <div class="row">
        <div class="col-md-3">
            <div class="contact-box center-version">
                <a href="#profile.html">
                    <img alt="image" class="img-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
                    <h3 class="m-b-xs"><strong>{el.name}</strong></h3>
        
                    <div class="font-bold">{el.age}</div>
                    <div class="font-bold">{el.email}</div>
        
                </a>
                <div class="contact-box-footer">
                    <div class="m-t-xs btn-group">
                       <Link to ={'/editcontact'}> <a class="btn btn-xs btn-white" onClick={()=>getuser(el)}><i class="fa fa-edit"></i> update</a></Link>
                        <a class="btn btn-xs btn-white"><i class="fa fa-envelope"></i> Email</a>
                        <a class="btn btn-xs btn-white"><i class="fa fa-trash" onClick={deletecontact}></i> delete</a>
                    </div>
                </div>
        
            </div>
     
        </div>
    </div>
</div>



    </div>
  )
}

export default ContactCard