const express = require('express');
const app =  express();
const db =require('./config/databaseConfig');
const gig =  require('./models/gigsModel');

const PORT = process.env.PORT || 5000;


// TESTING THE DATABASE CONNECTION:
try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// GIGS ROUTES:
app.use('/gigs',require('./routes/gigsRoute'));


// HOME ROUTE:
app.get('/',(req,res)=>{
    res.send("Hello World");
});


// LISTENING ON A PORT:
app.listen(PORT,()=> console.log(`listening on PORT ${PORT}`));