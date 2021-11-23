const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('pages/userlogin', {
        title: 'Login Page'
    })
})

module.exports = router