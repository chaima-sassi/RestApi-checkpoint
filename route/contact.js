const User=require("../model/user")
const express = require("express")
const route= express.Router()


route.get("/test" , (req,res)=> {

res.send("test")

})
route.post('/adduser' , async(req , res)=>{
    console.log(req.body)
    const {name , email,age}=  req.body
    try {
      let user = await new User({name, email,age}) 
      user.save()
      res.send({"user added":user})
    } catch (error) {
    
        console.log('error add new user')
        
    }
    
})
route.get('/getuser' , async(req , res)=> {
  try {
    let users = await User.find()
    res.status(200).send({'users': users})
  
  
  } catch (error) {
    console.log(error)
    
  }
      })


      route.delete('/removeuser/:id' , async(req , res)=>{
        const{id}= req.params
        try {
         await User.findByIdAndDelete(id)
          res.status(200).send('users deleted')
        
        
        } catch (error) {
          console.log('could not delete users')
          
        }
            })
       
            route.put('/updateuser/:id' , async(req , res)=>{
              const{id}= req.params
              const { name, age , email }=req.body
              try {
               await User.findByIdAndUpdate(id,{$set:{name , age , email}})
                res.status(200).send('users updated')
              
              
              } catch (error) {
                console.log('could not update users')
                
              }
                  })
    
    
    
    
   


module.exports = route