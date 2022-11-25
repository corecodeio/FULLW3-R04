const express = require('express');
const { server } = require('./src/config/config');
const app =  express();
const categoryRoutes = require('./src/routes/category');
const notFoundRoutes = require('./src/routes/404');
//const errorMiddelware = require('./src/middlewares/errorMiddelware');
//middelware
app.use(express.json());

//routes
app.use(categoryRoutes);
//error middelware
//app.use(errorMiddelware);

app.use(notFoundRoutes);

app.listen(server.port,()=>{
    console.log(`Server listening on port: ${server.port}`);
})