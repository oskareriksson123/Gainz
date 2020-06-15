if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}


const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const IndexRouter = require('./controllers/index');
const mongoose = require('mongoose');


app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.set('layout','includes.ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use('/', IndexRouter);

mongoose.connect(process.env.DATABASE_URL,  {useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', error=> console.log(error));
db.once('open', () => console.log('connected!'));


app.listen(process.env.PORT || 3000);