const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('pages/userRegister',{
        title:'Registeration Page'
    })
})

module.exports = router