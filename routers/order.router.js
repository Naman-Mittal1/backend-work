const express = require('express');
const app = express();
app.use(express.json());
const Order = require('../models/order')

const orderRouter = express.Router();

// function createOrderId() {
//     return Math.random().toString(36).substring(2, 15); 
//   }

orderRouter.post('/', async (req, res) => {
    try {
        const { deliveryAddress, cartList, userData } = req.body;
        
        // Save the order to MongoDB
        const order = new Order({
            deliveryAddress,
            cartList,
            userData,
            // trackingId: createOrderId(),
        });
        
        await order.save();
  
      // Respond with success message
      res.json({ message: 'Order placed successfully!' });
    } catch (error) {
      console.error('Error placing order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = orderRouter;
