const mongoose = require('mongoose');

// Modelo de usuario
const Usuario = mongoose.model('Usuario', {
    nombre: String,
    correo: String
});

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tu_basededatos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión exitosa a la base de datos MongoDB');

    // Crear un nuevo usuario
    const nuevoUsuario = new Usuario({
        nombre: 'John Doe',
        correo: 'john@example.com'
    });

    // Guardar el nuevo usuario en la base de datos
    nuevoUsuario.save().then(() => {
        console.log('Nuevo usuario creado correctamente');
    }).catch((error) => {
        console.error('Error al crear nuevo usuario:', error);
    });
}).catch((error) => {
    console.error('Error al conectar a la base de datos MongoDB:', error);
});
