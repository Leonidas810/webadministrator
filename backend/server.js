// Importa Express.js
const express = require('express');

// Crea una instancia de Express
const app = express();

// Define una ruta básica
app.get('/', (req, res) => {
    res.send('¡Hola Mundo desde Express!');
});

// Escucha las solicitudes en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
});
