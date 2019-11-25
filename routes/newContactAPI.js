// const router = require('express').Router()
// const connection = require('../connectionDb')


// //post new comment
// router.post('/newContact', (req, res) => {
//     // destructuring constants for each req.body
//     const { contact_fname, contact_lname, contact_email, contact_comment} = req.body
//     //Brief error checking
//     if (!contact_fname) {
//         return res.status(400).send({
//             error: true,
//             message: 'Please provide contact'
//         });
//     }
//     //query for posting new comment from contact page
//     connection.query(`INSERT INTO contacts(contact_fname, contact_lname, contact_email, contact_comment) VALUES(?,?,?,?)`,
//     [contact_fname, contact_lname,contact_email, contact_comment], function(err,results) {
//        if(err) throw err;
//        res.send(results)
//     });
// })

// module.exports = router;

