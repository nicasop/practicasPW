const express = require('express');
const app = express();
const morgan = require('morgan');
const {mongoose} = require('./database');

app.set('nombreApp','Aplicación para manejo de gastos SRI');
app.set('puerto',process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/gastos',require('./routes/server.routes'));

app.listen(app.get('puerto'), () => {
    console.log('Nombre de la Aplicación: ',app.get('nombreApp'));
    console.log('Puerto del servidor: ',app.get('puerto'));
})