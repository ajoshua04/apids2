const express = require('express');
const app = express();

app.use(express.json());

const ciudades = [
    {
        id:"CARTAGENA",
        departamento: "Bol\u00edvar"
    },
    {
        id: "BARRANQUILLA",
        departamento: "Atl\u00e1ntico"
    },
    {
        id:"STA MARTA",
        departamento: "Magdalena"
    },
    {
        id:"BOGOTA",
        departamento: "Cundinamarca"
    }
]

app.get('/', (req,res) => {
    res.send('API para proyecto de Diseño de Software 2');
});

app.get('/ciudades', (req,res) => {
    res.send(ciudades);
});

app.get('/ciudades/:id', (req,res) => {
    const ciudad = ciudades.find(c => c.id === req.params.id);
    if (!ciudad) return res.status(404).send('No existe ciudad en esta api');
    else res.send(ciudad);
});

const port = process.env.port || 80;
app.listen(port , () => console.log(`Escuchando en el pouerto ${port}`))