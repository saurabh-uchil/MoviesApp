const express = require('express')
const router = express.Router()

router.get('/userlogin',(req,res)=>{
    res.render('pages/userlogin',{
        title:'Login Page'
    })
})

module.exports = router