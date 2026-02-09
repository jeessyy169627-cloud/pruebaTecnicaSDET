const express = require ('express');
const routes = express.Router();
const task = require ('../models/task');

routes.get('/', async (req, res) => {
  res.json({
    title: 'My Application',
    description: 'Prueba de mi aplicacion'
  });
})

routes.post('/', async (req, res ) => {
    const { title} = req.body;
    res.json({
        message: 'Informacion insertada correctamente'
    })
})

routes.put('/', async (req, res) => {
    const { title} = req.body;
    res.json({
        message: 'Metodo PUT'
    })
})

routes.delete('/', async (req, res) => {
    res.json ({
        message: 'Metodo DELETE'
    })
})



module.exports=routes;