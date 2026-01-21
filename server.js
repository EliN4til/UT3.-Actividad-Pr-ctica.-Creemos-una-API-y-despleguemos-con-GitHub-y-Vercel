const express = require('express');
const cors = require('cors');
const QUOTES = require('./questions.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de Citas Tecnológicas funcionando. Ve a /api/quotes para ver los datos.');
});

// Endpoint actualizado para la nueva temática
app.get('/api/quotes', (req, res) => {
    res.json(QUOTES);
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});