const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const { PORT } = process.env; 

app.use(cors());
app.use(
    session({
        secret:'0613',
        resave: false,
        saveUninitialized: true,
    })
);

const dataRouter = require('./routes/mainRouter');

app.use('/data', dataRouter);

app.use('/', (req, res) => {
    res.send('Hello from express');
});

app.listen(PORT, () => {
    console.log(`THE SERVER OPEN AT PORT NO.${PORT}...`);
});