const express = require("express");
const app = express();
const path = require('path');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(require('./routes/index.js'));

// connection to the server
mongoose.connect('mongodb+srv://sharkiOrx:darbeta12@cluster0.v7wdw.mongodb.net/<dbname>?retryWrites=true&w=majority')
.then(db => console.log('db connected'))
.catcher(err => console.log(err));


// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'), function (){
    console.log('Server on port', app.get('port'));
});