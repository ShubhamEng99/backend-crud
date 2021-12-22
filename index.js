const express=require('express');
const port=3000;
const db=require('./config/mongoose');
const bodyParser=require('body-parser')
const app=express();
const Cors=require('cors')

app.use(bodyParser.json())
app.use(Cors());

app.use('/employees',require('./controllers/employeecontroller'))

app.listen(port,function(err){
    if(err){
        console.log('error in running the server');
        return;
    }
    console.log('server is running on :' , port);
})