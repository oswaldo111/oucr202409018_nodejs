const express =  require('express');
const bodyParser = require('body-parser');
const ProductOUCRRoutes = require('./src/routes/ProductOUCRRoutes');
const database = require('./src/config/database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/product', ProductOUCRRoutes);

app.listen(PORT, ()=> {
    console.log(`servidor esuchando en el puerto ${PORT}`);
});
