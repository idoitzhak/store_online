//1.  IMPORT NPM LIBRARIES FROM node_modules
import express from 'express';
import bodyParser from 'body-parser';

//2.  CREATE APP
const app = express();

//3.  USE BODY PARSER IN APP
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//4.  CREATE THE ROUTE
import accountsRoute from './accounts.js';
app.use('/accounts', accountsRoute);

import cartRoute from './cart.js';
app.use('/cart', cartRoute);

import storeRoute from './store.js';
app.use('/store', storeRoute);

//5.  CREATE VIRTUAL SERVER ENVIRONMENT
const port = 5000;
app.listen(port, function(){
    console.log(`Server is working via port ${port}`);
});
console.log("Jello from Store-Online");