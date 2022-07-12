const express = require('express');
const app = express();
const morgan = require('morgan');
const router=express.Router();
// const port = 3000;


app.use(express.json());
app.use(morgan('dev'));

app.set('nombreApp','Aplicación para manejo de gastos SRI');
app.set('puerto',4000);
app.set('view engine','ejs');

//Ruta principal 
app.get('/',(req,res) => {
    res.render('index.ejs');
})

//Rutas de la practica7 
//ruta practica7
router.get('/',(req,res) => {
    res.send('Bienvenido a mi sitio web');
});

//ruta pagina about 
router.get('/about',(req,res,next) => {
    res.send('<h1>Acerca de Nosotros</h1>');
    logger(req,res,next);
});

//rutas pagina usuario
router.post('/usuario/:id',(req,res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario nuevo registrado');
});

router.put('/usuario/:id',(req,res) => {
    console.log(req.body);
    res.send(`Datos del usuario ${req.params.id} actualizados`);
});

router.delete('/usuario/:id',(req,res) => {
    res.send(`Usuario ${req.params.id} borrado`);
});
//ruta pagina calculo 
router.post('/calculo',(req,res,next) => {
    logger(req,res,next);
    console.log(req.body);
    res.send('Cálculo impuesto a la renta');
});

//ruta pagina gastos 
router.get('/gastos',(req,res) => {
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
router.get('/gastos/vivienda',(req,res) => {
    res.send('<h1>Acerca de los gastos de Vivienda</h1>')
});

//ruta pagina salud
router.get('/gastos/salud',(req,res) => {
    res.send('<h1>Acerca de los gastos de Salud</h1>')
});

app.use('/practica7',router);

app.use(express.static('public'));

app.listen(app.get('puerto'),() => {
    console.log(`Servidor escuchando en el puerto ${app.get('puerto')}`);
    console.log(app.get('nombreApp'));
});

//middleware incorporado
function logger(req,res,next){
    console.log('Ruta Recibida '+req.protocol + '://'+req.get('host')+req.originalUrl);
    next();
}