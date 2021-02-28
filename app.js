//to install database = npm install mongoose
//const path=require('path')
const express = require('express')
const exphbs  = require('express-handlebars')

const app = express()
const port = 3000
const hostname='127.0.0.1'

// Using Node.js `require()`
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1/nodejs_blog_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// use the following code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static('public')) //How to find our css, fonts, img static files that is app.use(express.static('public'))

//Creates a super simple Express app which shows the basic way to register 
//a Handlebars view engine using this package.
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

const main =require('./routes/main')
app.use('/', main)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  




  /* 
app.get('/blog-single', (req, res)=>{ //On purpose typed "blog-single"
    res.sendFile(path.resolve(__dirname, 'website/blog-single.html')) 
})
 */