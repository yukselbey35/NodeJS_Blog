// Using Node.js `require()`
const mongoose = require('mongoose')

const Post = require('./models/Post.js')

mongoose.connect('mongodb://127.0.0.1/nodejs_blog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

Post.findOneAndDelete('60326cd62a2bfe59d8882658', (error, post) =>{
  console.log(error, post)
})

/* 
//update by id
Post.findByIdAndUpdate('603166b9f9d0f904483e82af', {
  title: 'my 1st title'
}, (error, post) =>{
  console.log(error, post)
})
 */


/* 
//to find by id 
Post.findById('603166b9f9d0f904483e82af', (error, post)=>{
  console.log(error, post)
})

 */

/* 
//to see all data
Post.find({ }, (error, post)=>{
  console.log(error, post)
}) 

 *//* 
//finding just one data
Post.find({
  title: '"my first title'
}, (error, post)=>{
  console.log(error, post)
}) */

/* 
//creating first data
Post.create({
    title: 'my second post of the title',
    content: 'content of the post'
}, (error, post)=>{
    console.log(error, post)
})

 */