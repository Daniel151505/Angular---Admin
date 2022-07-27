const express = require('express');

// Crear el servidor de express
const app = express();

app.listen(3001, () => {
    console.log('Serivdor corriendo en puerto '+ 3001)
})