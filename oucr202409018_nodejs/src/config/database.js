const mongoose = require('mongoose')
 

mongoose.connect('mongodb://127.0.0.1:27017/db202409018', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('se conecto'))
    .catch(err => console.error('no se pudo conectar: ', err));