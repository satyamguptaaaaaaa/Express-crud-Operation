
require('dotenv').config();
const express = require('express');
const UserRoutes=require('./Routs/UserRouters.js');
const userModal = require('./Modals/userModal.js');

const cors= require("cors");

const connectToDb= require('./config/db.js')
const app = express();

//// express middleware 

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors());
//// reqest se pehle exute hota he .
connectToDb();

app.use('/',UserRoutes);
//// app export : 
module.exports=app;
