const path = require('path')

const express = require('express');
const app = express();

const helmet = require('helmet');
// /app.use(helmet());

//app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const isValidated = (req, res, next) => {
    res.locals.validated = true;
    next();
}

app.use(isValidated)

app.get('/', (req, res, next) => {
    res.render('index', {
        msg: "Failure!",
        msg2: "Success!"
    })
})

app.listen(3000);