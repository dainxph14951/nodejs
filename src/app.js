const express = require("express");
const productRouter = require('./roter/products');
const app = express();

app.use(express.json());


// app.get("/", (req, res) => {
//    res.send("<h1>Home Page</h1>")
// });
// Routing
app.use("/api", productRouter);

const PORT = 3001;

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

