const Sequelize = require('sequelize');
const db = require('../config/databaseConfig');

const gig = db.define('gigs',{
    title : {
        type: Sequelize.STRING
    },
    description : {
        type: Sequelize.STRING
    },
    technologies : {
        type: Sequelize.STRING
    },
    contact_email : {
        type: Sequelize.STRING
    }
})

module.exports = gig;