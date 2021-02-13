const path=require('path')
const express = require('express')
const app = express()
const port = 3000
const hostname='127.0.0.1'

// use the following code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  

/* Examples
app.use('/test', (req, res, next)=>{
    console.log('This is a middleware')
    next()
})
app.get('/test', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})

app.get('/users/:userID/movies/:moviesID', (req, res)=>{
    res.send (
        `<h1>User Name: ${req.params.userID}</h1>
         <h1>Movie Name: ${req.params.moviesID}</h1>
        `
    )
})
 */



/* 
const http = require('http') //requiring http protocol
const fs = require('fs') //require and initialize fs module to access physical file system

const hostname='127.0.0.1'
const port = 3000 //use port 3000 for nodejs

const indexHtml=fs.readFileSync('index.html') //Initialize index.html with fs.readFileSync to indexHTml
const contactHtml=fs.readFileSync('contact.html')
const aboutHtml=fs.readFileSync('about.html')
const pageNotFound=fs.readFileSync('pageNotFound.html')

//Start to use nodejs npmjs to install express framework 
//to initialize nmp=npm init
//then install express packs=npm install express
//install dependencies =npm install
//nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
//install nodemon as a development dependency= npm nodemon --save-dev
//install nodemon as a global dependency =npm install -g nodemon
const server = http.createServer((req, res) =>{  //we will run create server method with parameters
    if(req.url ==='/'){
        return res.end(indexHtml)
    }else if(req.url ==='/contact' || req.url ==='/CONTACT'){
        return res.end(contactHtml)
    }else if(req.url ==='/about' || req.url ==='/ABOUT'){
        return res.end(aboutHtml)
    }else{
        res.end(pageNotFound)
        res.statusCode =404
    }

})

//We will listen the server
server.listen(port, hostname, ()=>{
    console.log(`Server is running, http://${hostname}:${port}/`)
})
 */