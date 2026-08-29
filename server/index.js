import express from "express";
import "./src/config/db.js"
import { connectDb } from "./src/config/db.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app =express();
app.use(bodyParser.json())




connectDb();


app.get("/health", (req, res)=>{

res.send("the server is healthy and work well . abdullah");



})


const port = process.env.PORT;
console.log(process.env.PORT)
app.listen(port, () =>{


console.log("server is working on port: http://localhost:" , port);

});







