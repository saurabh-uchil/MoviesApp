const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('pages/register',{
        title:'Login Page'
    })
})

module.exports = router