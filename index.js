require('./db/db')
require('dotenv').config();

const express = require('express')
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});


const cors = require('cors')
app.use(cors())

const { errorHandler } = require('./middlewares/error-handler.middleware')
const { routeNotFound } = require('./middlewares/route-not-found.middleware')
const { authVerify } = require('./middlewares/auth-verify.middleware')


app.use('/assets/uploads', express.static('assets/uploads'))


const userRouter = require('./routers/user.router.js')
app.use('/user', authVerify, userRouter)

const authRouter = require('./routers/auth.router.js')
app.use('/auth', authRouter)

const bookRouter = require('./routers/book.router.js')
app.use('/shop', bookRouter)

const categoryRouter = require('./routers/category.router.js')
app.use('/categories', categoryRouter)

const cartRouter = require('./routers/cart.router.js')
app.use('/user/cart', authVerify, cartRouter)

const wishlistRouter = require('./routers/wishlist.router.js')
app.use('/user/wishlist', authVerify, wishlistRouter)

const orderRouter = require('./routers/order.router.js')
app.use('/order', orderRouter)

const jobRouter = require('./routers/job.router.js')
app.use('/job', jobRouter)


app.use(routeNotFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log('server started');
});