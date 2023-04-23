const mongoose = require("../config/mongoose")

const productSchema = mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    quantity:Number
})

module.exports = mongoose.model("productos", productSchema)