const mongoose = require("mongoose")

mongoose.connect(`mongodb://localhost:27017/dn2023`)
.then(()=>{console.log("Conectado")})
.catch((error)=>console.log(error))

module.exports = mongoose