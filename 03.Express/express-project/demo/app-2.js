const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/user', (req, res, next) => {
    console.log(req.method);
    next();
}, function (req, res, next) {
    console.log('User route accessed');
    next();
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});