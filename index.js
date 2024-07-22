
require('dotenv').config()

const Express = require("express");
const App = Express();

const port = process.env.PORT;


App.get("/" ,(req, res)=>{
    res.send("hiiii this is home....")
})

App.get("/about" ,(req, res)=>{
    res.send("about....")
})

App.get("/insta" ,(req, res)=>{
    res.send("Insta....")
})


App.listen(port,()=>{
    console.log(`started server on port : ${port}`);
})