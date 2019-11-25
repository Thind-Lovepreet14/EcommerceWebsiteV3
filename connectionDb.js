// const mysql = require('mysql'); //node.js driver for mysql that creates a connection to mysql

// //creating the connection to the database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: process.env.MYPASSWORD,
//     database: 'run4it_db'
// });

// //get the MySQL connection ID ("thread ID") of a given connection
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log('connected as id' + connection.threadId);
//     // connection.query('SELECT * FROM products', function(err, data) {
//     //     console.table(data)
//     // })
// });

// //exporting connection to use in other APIs
// module.exports = connection