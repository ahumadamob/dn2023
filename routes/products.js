var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const productos = [
    {id:1, name:"Moto G", price: 600.00},
    {id:2, name:"Sony XPeria", price: 2000.0},
    {id:3, name:"IPhone", price: 3200.0},
  ]
  res.json(productos)
});

router.get('/:id', function(req, res, next) {
  const producto = {id:req.params.id, name:"Celular genérico", price: 777.77}
  res.json(producto)
});

router.post('/', function(req, res, next) {
  res.json(req.body)
});

router.put('/:id', function(req, res, next) {
  res.json(req.body)
});

router.delete('/:id', function(req, res, next) {
  res.json({status: "ok"})
});

module.exports = router;
