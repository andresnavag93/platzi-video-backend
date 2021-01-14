const express = require('express');
const session = require('express-session');

const app = express();

app.use(
  session({
    resave: false, //don't save the cookie if exists a change
    saveUninitialized: false, // si no se ha inicializado no guardarla por defecto
    secret: 'keyboard cat',
  })
);

app.get('/', (req, res) => {
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).json({ hello: 'world', counter: req.session.count });
});

app.listen(3000, () => {
  console.log('Listening http://localhost:3000');
});
