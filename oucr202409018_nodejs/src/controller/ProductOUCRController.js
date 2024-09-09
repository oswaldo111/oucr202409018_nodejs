const ProductOUCR = require('../models/ProductOUCR');

exports.getAllProduct = async(req, res) => {
    try {
        const products = await ProductOUCR.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({error: 'error al obtener'});
    }
};

exports.getProductById = async(req, res) =>{
    try {
        const products = await ProductOUCR.findById(req.params.id);
        if (!products) {
            return res.status(404).json({error:'no se encontro al product'});
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({error:'error al obtener'});
    }
};

exports.createProduct = async(req, res) =>{
    try {
        const newProduc = new ProductOUCR(req.body);
        const savedProduct = await newProduc.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({error:'no se creo'});
    }

};

exports.updateProduct = async(req, res) =>{
    try {
        const updateProduct = await ProductOUCR.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updateProduct) {
            return res.status(404).json({error:'no se encontro'});
        }
        res.json(updateProduct);
    } catch (error) {
        res.status(500).json({error:'no se actulizo'});
    }
};

exports.deleteProduct = async(req, res) =>{
    try {
        const deleteProduct =  await ProductOUCR.findByIdAndDelete(req.params.id);
        if (!deleteProduct) {
            return res.status(404).json({error: ' no se encontro'});
        }
        return res.json({message: ' se puedo eliminar'});
    } catch (error) {
        res.status(500).json({error:'no se elimino'});
    }
};