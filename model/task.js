const mongoose = require('mongoose')
const Schema = mongoose.Schema

const task = new Schema({
    name:{type:String},
    value:{type:String}
})

module.exports = mongoose.model('task', task)