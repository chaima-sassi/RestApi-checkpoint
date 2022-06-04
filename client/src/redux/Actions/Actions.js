import {GET_CONTACTS} from './ActionType'
import axios from 'axios'






export const getcontact = () =>async(dispatch)=> {
    try {
      const res = await axios.get('/api/user/getuser')
       dispatch ({
           type : GET_CONTACTS ,
            paylaod: res.data

       })
        
    } catch (error) {
        console.log(" error ")
        
    }

}

export const postcontact = (newcontact) =>async(dispatch)=> {
    try {
       await axios.post('/api/user/adduser', newcontact)
       dispatch (getcontact())
        
    } catch (error) {
        console.log(" error ")
        
    }

}

export const removecontact = (id) =>async(dispatch)=> {
    try {
       await axios.delete(`/api/user/removeuser/${id}`)
       dispatch (getcontact())
        
    } catch (error) {
        console.log(" error ")
        
    }

}
export const updatecontact = (id,newcontact) =>async(dispatch)=> {
    try {
       await axios.put(`/api/user/updateuser/${id}`,newcontact)
       dispatch (getcontact())
        
    } catch (error) {
        console.log(" error ")
        
    }

}