const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_name: { type: String, required: true },
  product_type: { type: String, required: true },
  product_category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
},{ collection: 'product' });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;