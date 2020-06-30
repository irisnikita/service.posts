// Libraries
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const db = mongoose.connection;

require('dotenv').config();

// Define server
const PORT = process.env.PORT || 8100;
const app = express();
const server = http.createServer(app);

// Connect mongoose
mongoose.connect('mongodb+srv://nltruongvi:TjmWjm824594@cluster0-vzakd.mongodb.net/vmotel_search?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true})
    .then(() => {console.log('MongoDB connected')});

mongoose.set('useFindAndModify', false);

db.on('error', (err) => {
    console.log('Db connection error:', err.message);
});

app.use(cors());
app.use(bodyParser.json());
// app.use('/public', express.static('public'));
// app.get('/', (req, res) => {
//     res.send({server: 'Posts services', port: PORT});
// });

require('./routes/post')(app);


server.listen(PORT, () => {
    console.log('Server is run as port: ', PORT);
});
