// const express = require("express");
import express from 'express';
import productRouter from './roters/product';
import mongoose from 'mongoose';
import cors from 'cors';
import categoryRouter from './roters/category';
import authRouter from "./roters/Users";
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// Routing
app.use('/api', productRouter);
app.use('/api', categoryRouter);
app.use('/api', authRouter);
// connect database
mongoose
  .connect('mongodb://127.0.0.1:27017/dbnamw')
  .then(() => console.log('Connect db thanh cong'));
// Connect
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});

// const http = require('http');

// const server = http.createServer((req, res) =>{
//  const url = req.url;
//  if(url === '/product'){
//     res.setHeader('Content-Type', 'applocation/json');
//     const data = [{id: 1, name: "Product A"}, {id: 2, name: "Product B"} ]
//     res.end(JSON.stringify(data));
//  }else{
//     res.setHeader('Content-Type', 'text/html');
//     res.write("<html>");
//     res.write("<body>");
//              res.write("<h1>Home Page</h1>");
//     res.write("</body>");
//     res.write("</html>");
//     res.end();
//  }
// });
