import express from 'express'
import ViteExpress from "vite-express";

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/api/message", (req, res) => {
  res.send(req.body);
});

// ViteExpress.config({ mode: "production" })
ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));

// const auth = {
//   mail: 'mail@example.com',
//   password: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'
// }

// app.post('/api/login/', (req, res, next)=>{
//   if (auth.mail !== req.body.email || auth.password !== req.body.password){
//    const err = new Error('error request')
//    next(err)
//   }else{
//     res.send(req.body)
//   }
// })