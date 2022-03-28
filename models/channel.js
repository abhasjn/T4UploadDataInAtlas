const mongoose = require('mongoose')


// Creating a Database Schema as per our requirement
const channelSchema = new mongoose.Schema({
    text:{
        type:String
    }
})

const ChannelModel = mongoose.model('Channel', channelSchema)


// Exporting 
module.exports = ChannelModel