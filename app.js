const express = require('express');
const app = express();
const path = require("path");
const db= require('./config/database')
const router = require('./routes/index')
const port = 3000;





app.use(express.static( 'public'))

app.set('view engine' , 'ejs')



// inport router
app.use('/post', router);

app.get('/' ,(req,res, next)=>{
   res.render('home')
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port} `)
})