//enviroment variables
const dontenv = require('dotenv');
const cors = require('cors');

const express = require('express');
dontenv.config();
//Add mongoose
const mongoose = require('mongoose');

//Routes
const productsRoutes = require('./routes/product.routes');
const purchaseRoutes = require('./routes/purchase.routes');

//Bring express to our app
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());


app.use((error, req, res, next) => {
    console.log(error.stack);
    res.status(500).json({message: error.message});
})

//Router
app.use(productsRoutes);
app.use(purchaseRoutes);

//Conect to database

const connectDB = () => {
    try{
        mongoose.connect(process.env.URI_DB);
        console.log('Database is connected');
    }catch(err){
        console.log(err);
    }
}

app.listen(process.env.PORT, () => {
    connectDB();
    console.log('Server is running on port ' + process.env.PORT);
})

module.exports = app;