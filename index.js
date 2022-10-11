// Dependencies
const express = require('express');
const path = require('path')


// instantiations
const app = express();

// configurations
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.set('views', './views')


// middleware
app.use(express.static(path.join(__dirname, 'public')));
// for uoloaded images
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))


// Simple request time logger
app.use((req, res, next) => {
  console.log("A new request received at " + Date.now());

  // This function call tells that more processing is
  // required for the current request and is in the next middleware
  // function/route handler.
  next();  
});

app.use('/about', (req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});


// To parse URL encoded data
app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: false }));

// routes
// req stands for request and res stands for ressponse
// setting up a route
// app.method(path, handler)
// methods: get, post, delete, put(edit, update)

app.get('/homepage', (req, res) => { // new
    res.render('index');
  });

app.get('/about-us', (req, res) =>{
    res.render('about-us')
  })

app.get("/contacts", (req, res) => {
  res.render('contact-us')
});

app.get("/Dairy-products", (req, res) => {
    res.render('dairy')
  });

app.get("/Horticulture-products", (req, res) => {
    res.render('horticulture')
  });

app.get("/how-to-buy", (req, res) => {
    res.render('how-to-buy')
  });  

app.get("/payment-methods", (req, res) => {
    res.render('payment')
  });   
  
  app.get("/poultry-products", (req, res) => {
    res.render('poultry')
  });  

  // For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

//   bootstraping server
app.listen(7000, () => console.log('listening on port 7000'));