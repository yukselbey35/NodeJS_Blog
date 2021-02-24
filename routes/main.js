const { Router } = require('express')
const express = require('express')
const router = express.Router()

app.get('/', (req, res)=>{
    res.render('website/index')
})

app.get('/about.html', (req, res)=>{
    res.render('website/about')
})

app.get('/blog.html', (req, res)=>{
    res.render('website/blog')
})


app.get('/contact.html', (req, res)=>{
    res.render('website/contact')
})


app.get('/login.html', (req, res)=>{
    res.render('website/login')
})

app.get('/register', (req, res)=>{ /*you can type register instead of register.html on the address bar */
    res.render('website/register')
})

app.get('/blog-single', (req, res)=>{ //On purpose typed "blog-single"
    res.sendFile(path.resolve(__dirname, 'website/blog-single.html')) 
})