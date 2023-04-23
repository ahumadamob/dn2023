const productosModel = require("../models/productosModel")

module.exports = {
    getAll: async function(req, res, next) {
        try{
            const documents = await productosModel.find()
            res.json(documents)
        }catch(e){
            console.log(e)
        }
    },

    getById: async function(req, res, next) {
        try{
            const document = await productosModel.findById(req.params.id)
            res.json(document)
        }catch(e){
            console.log(e)
        }
    },

    create: async function(req, res, next) {
        try{
            const document = new productosModel({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                quantity: req.body.quantity,
            })
            const product = await document.save()
            res.json(product)
        }catch(e){
            console.log(e)
        }
        
    },

    update: async function(req, res, next) {
        try{
            const update = await productosModel.updateOne({_id: req.params.id}, req.body)
            res.json(update)
        }catch(e){
            console.log(e)
        }
    },

    delete: async function(req, res, next) {
        try{
            const deleteResponse = await productosModel.deleteOne({_id: req.params.id})
            res.json(deleteResponse)
        }catch(e){
            console.log(e)
        }
    }

}