const express = require('express');

const dotenv = require('dotenv');

const app = express();

// Initailize dotenv to access environment variables
dotenv.config();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});


const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, () => {
    console.log(`server running on port http://${HOST}:${PORT}`);
});