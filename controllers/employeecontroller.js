const express=require('express');

const router=express.Router();

const Employee=require('../models/employee');

router.get('/',(req,res)=>{
    Employee.find({},function(err,employees){
        if(err){
            return;
        }
        res.send(employees);
    })
})

router.post('/create-employee',(req,res)=>{
    console.log(req.body);
    Employee.findOne({email:req.body.email},function(err,emp){
        if(!emp){
            Employee.create(req.body,function(err,user){
                if(err){
                    return;
                }
                return res.send(user);
            })
        }
    })
})

router.delete('/del-employee/:id',(req,res)=>{
  Employee.findByIdAndDelete(req.params.id,function(err,user){
       return res.send(user)
  })
})
router.get('/get-employee/:id',(req,res)=>{
    console.log(req.params.id)
    Employee.findById(req.params.id,function(err,user){
        console.log(user);
        return res.send(user);
    })
})
router.post('/update-emp/:id',(req,res)=>{
    Employee.findByIdAndUpdate(req.body._id,req.body,function(err,user){
      return res.send(user)
    })
})
module.exports=router;