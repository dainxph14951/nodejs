// const express = require("express");
import express from 'express';
import productRouter from './roters/product';
import mongoose from 'mongoose';
const app = express();
// middleware
app.use(express.json());

// Routing
app.use('/api', productRouter);

// connect database
mongoose
                     .connect("mongodb://127.0.0.1:27017/dbnamw")
                      .then(() => console.log('Connect db thanh cong'));
// Connect
const PORT = 27017;
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
