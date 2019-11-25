const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    contact_fname: { type: String, required: true },
    contact_lname: { type: String, required: true },
    contact_email: { type: String, required: true },
    contact_comment: { type: String, required: true },
},{ collection: 'contact' });

const Contact= mongoose.model('Contact', contactSchema);

module.exports = Contact;