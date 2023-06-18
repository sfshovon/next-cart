import mongoose from 'mongoose';

// Delete Mongoose model cache
// delete mongoose.models.Product;
// delete mongoose.modelSchemas.Product;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  productImg: {
    type: String,
    required: true
  },
  mrp: {
    type: Number,
    required: true
  },
  discountPrice: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;