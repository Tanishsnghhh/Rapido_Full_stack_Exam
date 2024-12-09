import mongoose from "mongoose"; 
import express from "express";

const app = express();

const port = 8000;


app.get ("/" ,(req, res)=>{
    res.send("app is running")
})



app.listen(port, () => {
    console.log(`Server is running at http://localhost:8000`);
  });