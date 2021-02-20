// Using Node.js `require()`
const mongoose = require('mongoose')

const Post = require('./models/Post.js')

mongoose.connect('mongodb://127.0.0.1/nodejs_blog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

Post.create({
    title: 'my first title',
    content: 'content of the post'
}, (error, post)=>{
    console.log(error, post)
})