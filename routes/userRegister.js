const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../database");
const router = express.Router();

//Regex
const emailRegex =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const passwordRegex = /^[^<>]{6,}$/;

const isValid = (value, regex) => {
  return regex.test(value);
};

//trim and lowercase email
const cleanEmail = (email) => {
  return email ? email.toLowerCase().trim() : "";
};

// display register form
router.get("/", (req, res) => {
  res.render("pages/userRegister", {
    title: 'Register Page'


  });
});

// @path    '/register'
router.post("/", (req, res) => {
  const { firstname, lastname, email, password, confirmPassword } = req.body;
  const cleanedEmail = cleanEmail(email);
//input validation
  if (!email || !password || !confirmPassword) return res.send("Please enter all fields")
  if (!isValid(cleanedEmail, emailRegex)) return res.send("Email not valid");
  if (!isValid(password, passwordRegex)) return res.send("Password must be 6 characters or more");
  if (password !== confirmPassword) return res.send("Passwords don't match");
//checking if email exists
  db.oneOrNone("SELECT email FROM users WHERE email = $1;", [cleanedEmail])
    .then((user) => {
      if (user) return res.send("User already exists");
//hash password
       const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      console.log(req.body);
      db.none(
        "INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4);",
        [firstname, lastname, cleanedEmail, hash]
      )
        .then(() => {
          req.flash("success", "User successfully created, please login.");
          res.redirect("/");
        })
        .catch((err) => {
          // error inserting into db
          console.log(err);
          res.send(err.message);
        });
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});
module.exports = router;
