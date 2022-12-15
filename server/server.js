require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const {ROLLBAR_TOKEN} = process.env
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')
rollbar.log('LAB TEST !')


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})
// app.listen(4545,()=>console.log('Listening on Port 4545'))



const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Server listening on ${port}`))