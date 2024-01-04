const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    deliveryAddress: {
        type: Object,
      },
    cartList: {
        type: Array,
      },
    userData: {
        type: String,
      },
  }, { timestamps: true });

const Order = mongoose.model('Order' , orderSchema)

module.exports = Order