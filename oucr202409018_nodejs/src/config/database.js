const mongoose = require('mongoose')
 

mongoose.connect('mongodb://localhost:27017/db202409018', {
   
})
    .then(() => console.log('se conecto'))
    .catch(err => console.error('no se pudo conectar: ', err));