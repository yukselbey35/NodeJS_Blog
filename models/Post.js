// Using Node.js `require()`
const mongoose = require('mongoose')

//defines the structure of the document with mongoose.Schema
const PostSchema = new mongoose.Schema ({
    title: { type: String, require:true },
    content: { type: String, require:true },
    date: { type: Date, default:Date.now }
})

//Create instance to connect the database and export
module.exports = mongoose.model('Post', PostSchema)
