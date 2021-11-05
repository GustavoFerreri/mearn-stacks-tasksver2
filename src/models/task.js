// // Cargamos el modulo mongoose
// const mongoose = require('mongoose');
// //  traemos eel schema de mongoose
// const {Schema} = mongoose.Schema;

// // Creamos nuevo schema
// const taskSchema = new Schema ({
//     // Definimos los campos que tendra la tabla
//     title: { type: String, required: true },
//     description: { type: String, required: true },
// });

// module.exports = mongoose.model('Task', taskSchema);


const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Task', TaskSchema);