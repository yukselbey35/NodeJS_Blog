const { Router } = require('express')
const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('website/index')
})

router.get('/about.html', (req, res)=>{
    res.render('website/about')
})

router.get('/blog.html', (req, res)=>{
    res.render('website/blog')
})


router.get('/contact.html', (req, res)=>{
    res.render('website/contact')
})


router.get('/login.html', (req, res)=>{
    res.render('website/login')
})

router.get('/register', (req, res)=>{ /*you can type register instead of register.html on the address bar */
    res.render('website/register')
})

module.exports = router