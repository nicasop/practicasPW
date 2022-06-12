const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//ruta pagina principal 
app.get('/practica6',(req,res) => {
    res.send('Bienvenido a mi sitio web');
});

//ruta pagina about 
app.get('/practica6/about',(req,res) => {
    res.send('<h1>Acerca de Nosotros</h1>');
});

//rutas pagina usuario
app.post('/practica6/usuario/:id',(req,res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario nuevo registrado');
});

app.put('/practica6/usuario/:id',(req,res) => {
    console.log(req.body);
    res.send(`Datos del usuario ${req.params.id} actualizados`);
});

app.delete('/practica6/usuario/:id',(req,res) => {
    res.send(`Usuario ${req.params.id} borrado`);
});
//ruta pagina calculo 
app.post('/practica6/calculo',(req,res) => {
    console.log(req.body);
    res.send('Cálculo impuesto a la renta');
});

//ruta pagina gastos 
app.get('/practica6/gastos',(req,res) => {
    res.json(
        {
            gasto:'Salud',
            monto:14575.60,
            información:'Corresponde a consultas médicas, pagos de seguros, medicinas'
        }
    );
});

// rutas hijas de gastos
//ruta pagina vivienda 
app.get('/practica6/gastos/vivienda',(req,res) => {
    res.send('<h1>Acerca de los gastos de Vivienda</h1>')
});

//ruta pagina salud
app.get('/practica6/gastos/salud',(req,res) => {
    res.send('<h1>Acerca de los gastos de Salud</h1>')
});

app.listen(port,() => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});