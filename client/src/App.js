import {useEffect,useState}from "react"
import {useDispatch,useSelector}from 'react-redux'
import './App.css';
import AppNavbar from './component/ContactList/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './component/ContactList/AddContact';
import { Route, Routes } from 'react-router-dom';
import {getcontact} from'./redux/Actions/Actions'
import ContactCard from "./component/ContactList/ContactCard";
import EditContact from "./component/ContactList/EditContact";

function App() {
  const dispatch=useDispatch()
  const contacts=useSelector(state=> state.contacts)


  const[name,setName]=useState('')
  const[age,setAge]=useState(0)
  const[email,setEmail]=useState('')
  const[id,setId]=useState('')



  
  const getuser = (contact)=> {
    setName(contact.name)
    setAge(contact.age)
    setEmail(contact.email)
    setId(contact._id)

  }
  
 
  useEffect (()=>{
    dispatch(getcontact())







  },[])
  return (
    <div className="App">
     <AppNavbar/>
     <Routes>
       <Route path='/' element={ 
         <div style={{display:'flex', justifyContent:'space-around'}}>
           {contacts.map((el=> <ContactCard el={el} getuser={getuser}  />))}</div>}/>
        <Route  path='/adduser' element={<AddContact name={name} setName={setName} age={age} setAge={setAge} email={email} setEmail={setEmail} />}/>
        <Route path='/editcontact' element={<EditContact name={name} setName={setName} age={age} setAge={setAge} email={email} setEmail={setEmail} id={id} setId={setId} />}/>


     </Routes>
    
    </div>
  );
}

export default App;
