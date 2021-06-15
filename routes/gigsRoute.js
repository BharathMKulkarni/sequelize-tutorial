const express = require('express');
const gigsRouter  = express.Router();
const Gig = require('../models/gigsModel');

gigsRouter.get('/',(req,res)=>{
    Gig
    .findAll()
    .then(gigs => {
        console.log(gigs);
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
})

module.exports = gigsRouter;