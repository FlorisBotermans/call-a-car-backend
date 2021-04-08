const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const app = express();

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true)
mongoose.set('useCreateIndex', true)

if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb+srv://FlorisBotermans:Z3iyLnEq63rh@cluster.ateqo.mongodb.net/Call-A-Car-Database?retryWrites=true&w=majority', { useNewUrlParser: true });
    console.log('connected');
}

app.use(cors());

app.use(bodyParser.json())

routes(app);

app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
})

module.exports = app;