const express = require('express');
const app = express();
const morgan = require('morgan');
// const port = 3000;

app.use(express.json());
app.use(morgan('dev'));

// app.set('nombreApp','Aplicación para manejo de gastos SRI');
app.set('puerto',3000);

//rutas
app.use('/users', require('./routes/user'))

app.listen(app.get('puerto'),() => {
    console.log(`Servidor escuchando en el puerto ${app.get('puerto')}`);
});

module.exports = app;