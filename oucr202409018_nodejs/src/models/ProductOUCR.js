const mongoose  = require('mongoose');

const ProductOUCRSchema = new mongoose.Schema({
    NombreOUCR:{type: String, required:true},
    DescripcionOUCR: {type: String, required:false},
    PrecioOUCR: {type: Number, required:true}
})

module.exports = mongoose.model('ProductOUCR', ProductOUCRSchema);