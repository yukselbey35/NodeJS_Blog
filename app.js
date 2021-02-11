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