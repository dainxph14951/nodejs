const { Router } = require('express');

const { kiemTra } = require('../middleware/kiemtra');

const router = Router();

router.get("/api/products", kiemTra, (req, res) => {
    const products = [{id: 1, name:"dai"},{id: 2, name:"duy",},];
    res.json(products);
  });

  router.post("/api/products", kiemTra, (req, res) => {
    const products = [{id: 1, name:"dai"},{id: 2, name:"duy",},];
    products.push(req.body);
    res.json(products);
  });

  module.exports = router;
