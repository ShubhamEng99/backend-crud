const mongose=require('mongoose');

const empSchema=new mongose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:50
    },
    email:{
        type:String,
        required:true
    },
    position:{
        type:String,
    },
    salary:{
       type:Number
    }
})

const Employee=new mongose.model('Employee',empSchema);

module.exports=Employee;