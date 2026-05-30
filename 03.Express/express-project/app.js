const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log(`${req.method} request received at ${req.url},${Date.now()}`);
    res.send('/index');
});


app.get('/register', (req, res) => {
    console.log(`${req.method} request received at ${req.url},${Date.now()}`);
    res.send('/register');
});


app.get('/login', (req, res) => {
    console.log(`${req.method} request received at ${req.url},${Date.now()}`);
    res.send('/login');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}); 