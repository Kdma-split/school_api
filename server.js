require('dotenv').config();
require('./db/dbConnect.js');

const express = require('express');
const cors = require('cors');

const app = express();

const corsOpts = {
    origin: '*',
    methods: ['GET', 'POST'],
};

app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    console.log('Root route accessed');
    res.send('SERVER RUNNING');
});

const schoolRoutes = require('./routes/school.route.js');
app.use('/', schoolRoutes);

console.log('Environment Details:');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('DB_HOSTNAME:', process.env.DB_HOSTNAME);
console.log('DB_NAME:', process.env.DB_NAME);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

