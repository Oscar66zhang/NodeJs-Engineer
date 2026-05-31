const express = require('express');
const routes = require('./routes/index');
const routesVideo = require('./routes/video');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);
app.use('/video', routesVideo);

app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
})


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});