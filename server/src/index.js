const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const morgan=require('morgan')

const app=express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

//get
//post
//put
//path
//delete

app.get('/status',(req,res)=>{
    res.send({
        message:'hello world!'
    })
    console.log("asdasd")
})
 
app.listen(8080,()=>{
    console.log("Listening to PORT 8080 ")
})