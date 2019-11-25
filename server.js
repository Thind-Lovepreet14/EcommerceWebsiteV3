//Dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000;
const url = require('url')
const fs = require('fs');
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose');


//Ensures website is read in UTF-8
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(helmet()) //security
app.use(morgan('dev')) //logs every request

const accessLog = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('tiny', { stream: accessLog }))

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI // connection string for Atlas here  
} else {
  uri = process.env.ATLAS_URI // connection string for localhost mongo here  
}

// connection to database
mongoose.connect(uri, { useNewUrlParser: true, 
                        useCreateIndex: true, 
                        useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection is live");
})

//Pulling in APIs from the routes directory
const productRouter = require('./routes/productsAPI');
const contactRouter = require('./routes/contactsAPI')
// const productsAPI = require("./routes/productsAPI")
// const contactsAPI = require('./routes/contactsAPI')
// const products_idAPI = require('./routes/product_idAPI')
// const productFilterAPI = require('./routes/productFilterAPI')
// const contactInfoAPI = require('./routes/contactInfoAPI')
// const newContactAPI = require('./routes/newContactAPI')

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })
app.use('/product', productRouter);
app.use('/contact', contactRouter);

//Use once in production to create a static build
//static simply serves files (static resources) from disk. You give it a path (sometimes called the mount point), 
//and it serves the files in that folder.
// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

//is a method to configure the middleware used by the routes of the Express HTTP server object
// app.use('/api', productsAPI)
// app.use('/api', contactsAPI)
// app.use('/api', products_idAPI)
// app.use('/api', productFilterAPI)
// app.use('/api', contactInfoAPI)
// app.use('/api', newContactAPI)
const usersRoutes = require('./routes')

app.get('/api', (req, res) => {
	res.json({message: "API root"})
})

app.use('/api/users', usersRoutes)

//live connection react server and node server
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/public/index.html'));
});

//Binds and listens for connections on the specified host and port.
app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`)
})

//exporting for use in testing
module.exports = app;