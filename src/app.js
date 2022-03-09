const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.send("<h1>Home Page</h1>")
});

app.get("/api/products", (req, res) => {
  const products = [{id: 1, name:"dai"},{id: 2, name:"duy"}];
  res.json(products);
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

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server đang chạy cổng ${PORT}`);
});