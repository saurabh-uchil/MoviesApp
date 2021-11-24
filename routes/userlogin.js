const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../database");
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('pages/userlogin',{
        title:'Login Page'


    })
})

// login a user
router.post("/", (req, res) => {
    const { email, password } = req.body;
    const cleanedEmail = cleanEmail(email);

    //validation
    if (!email || !password) return res.send("Please enter both email and password");
    if (!isValid(cleanedEmail, emailRegex)) return res.send("Email is not valid");
    if (!isValid(password, passwordRegex)) return res.send("Password is not valid");
  
    //  does user exist?
    db.oneOrNone("SELECT * FROM users WHERE email = $1;", [cleanedEmail])
      .then((user) => {
        if (!user) return res.send("Credentials are not correct");
  
    // if so, is password correct?
        const checkPassword = bcrypt.compareSync(password, user.password);
 
      })
      .catch((err) => {
        // error checking db for existing email
        console.log(err);
        res.send(err.message);
      });
  });
  
module.exports = router