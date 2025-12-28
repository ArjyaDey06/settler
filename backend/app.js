import express from 'express'
import dotenv from 'dotenv'

const app = express();
app.use(dotenv.config())

const port = 3000

app.get('/' ,(req,res)=>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log('server is running')
})