const express=require('express');
const router=express.Router();

//consultar usuarios
router.get('/', (req, res)=> {
    return res.json('Todos los usuarios enviados');
})

//consultar un usuario
router.get('/:id', (req,res)=>{
    if(req.params.id === 'U001'){
        return res.json('Usuario 001 correcto');
    }
    return res.status(404).json('Usuario no encontrado');
});

//agregar usuario
router.post('/', (req,res)=>{
    const {username, password}=req.body;
    if (username && password) {
        return res.status(201).json('Usuario creado');
    }
    res.status(400).json('Usuario no creado');
})

module.exports=router;