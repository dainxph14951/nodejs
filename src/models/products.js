import mongoose from 'mongoose';

const productSchema  = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug:{
      type: String,
      lowercase: true,
      unique: true,
      index: true
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Product', productSchema);
