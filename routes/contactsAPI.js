// const router = require('express').Router()
// const connection = require('../connectionDb')

// //fetch all contacts
// router.get('/contacts', (req, res) => {
//     connection.query('SELECT * FROM contacts', function(err,data) {
//         res.json(data)
//     })
// })


// module.exports = router;


const router = require('express').Router();
let Contact = require('../models/contact.model');



router.get('/', async(req,res) => {
    try{
        const contact = await Contact.find()
        // const product = await Product.find({}).exec();
        return res.send(contact)
     
    } catch (err) {
        console.log(err);
      } 
    });

module.exports = router;