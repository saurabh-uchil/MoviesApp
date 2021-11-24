const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.render('pages/movies',{
        title:'Movies Page'
   })
})

module.exports = router