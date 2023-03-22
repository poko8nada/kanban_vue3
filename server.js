const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(3000, ()=>console.log('Example app listening on port 3000!'))

const auth = {
  mail: 'mail@example.com',
  password: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'
}

app.post('/api/login/', (req, res, next)=>{
  if (auth.mail !== req.body.email || auth.password !== req.body.password){
   const err = new Error('error request')
   next(err)
  }else{
    res.send(req.body)
  }
})