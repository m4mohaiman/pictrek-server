import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';


const app = express();

app.use(bodyParser.json({limit:"32mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"32mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://mohaiman2201:FLIdOSZyUEB88mRy@cluster0.dt8jbjo.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 6969;

mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on Port: ${PORT}`)))
    .catch(err => console.log(err.message));