const express = require('express');
const app=express();

//In this, we want to add logger2 to all the get methods but logger to only specific urls

const logger=(req,res,next)=>{
  const method=req.method;
  const url=req.url;
  const time= new Date().getFullYear();
  console.log(method, url, time);
  next();
}

const logger2=(req,res,next)=>{
  // const method=req.method;
  // const url=req.url;
  // const time= new Date().getFullYear();
  // console.log(method, url, time);
  console.log("Hello");
  next();
}

app.use('/about',logger);
app.use(logger2);

app.get('/',(req,res)=>{
  console.log("test");
  res.send("home");
})

app.get('/about/abc',(req,res)=>{
  res.send("about");
})

app.listen(5000,()=>{
  console.log("server is listening");
})