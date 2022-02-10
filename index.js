const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

//import endpoint diletakkan disini
const admin = require('./routes/admin');
app.use("/store/admin", admin);

//Agar bisa dijalankan, jangan lupa import pada file index.js
//endpoint customer
const customer = require('./routes/customer');
app.use("/customer", customer);

const product = require('./routes/product');
app.use("/product", product)

app.listen(8080, () => {
    console.log("Server run on port 8080");
})
