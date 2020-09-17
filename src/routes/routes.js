const {Router} = require ('express');
const path = require('path');
const router = Router();


router.get('/',(req,res) => {
  res.send('Mi primera clase Backend');
  });
  
router.get('/saludo',(requ,res) =>{
  res.send('Hola Yhojan Bienvenido');
});

  module.exports =router; 
  