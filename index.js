const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require("cors")

const { createProduct } = require('./controller/Product');
const productsRouters = require('./routes/Products')
const categoriesRouters = require('./routes/Categories')
const brandsRouters = require('./routes/Brands')
const usersRouters = require('./routes/Users')
const authRouter = require('./routes/Auth')
const cartRouter = require('./routes/Cart')
const ordersRouter = require('./routes/Order')


//middleware

server.use(cors({
    exposedHeaders:['X-Total-count']
}));
server.use(express.json());
server.use('/products', productsRouters.router);
server.use('/categories', categoriesRouters.router);
server.use('/brands', brandsRouters.router);
server.use('/users', usersRouters.router);
server.use('/auth', authRouter.router);
server.use('/cart', cartRouter.router);
server.use('/orders', ordersRouter.router);

main().catch(err=>console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://anuragyadav290902:Ecommerce@cluster0.yzqxfeb.mongodb.net/');
    console.log('Database connected');
}

server.get('/' ,(req,res)=>{
    res.json({status : 'success'})
})

server.listen(8080 ,()=>{
    console.log("server started");
})