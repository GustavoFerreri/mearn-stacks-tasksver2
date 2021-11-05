const express = require('express');
const router = express.Router();
// Colocamos task, llamandolo desde routes
const Task = require('../models/task');

// Esta es una nueva manera para una ruta asincrona con la palabra clave async
router.get('/', async (req, res) => {
    // alojamos en tasks todas las tareas, una vez se obtengan las tareas, se ejecuta el callback
    const tasks = await Task.find();
    // devolvemos una respuesta con las tareas
    res.json(tasks);
});

// Buscamos las tareas mediante el id
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

// ahora cargamos el metodo post, para crear una tarea
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    console.log(newTask);
    await newTask.save();
    res.json({status: 'Task saved'});
});

// ahora cargamos el metodo put, para actualizar registros
router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Tasks update'});
});

// en este punto cargamos el metodo delete, para eliminar registros
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task deleted'});
});


module.exports = router;