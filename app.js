const path=require('path')
const express = require('express')
const app = express()
const port = 3000
const hostname='127.0.0.1'

// use the following code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'website/index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
