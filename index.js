const express = require('express')
const app = express()

//Port to listen
const PORT = process.env.PORT || 3000

//Middleware to parse req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//For creating and using views
app.set('view engine', 'ejs')

// For css, js and images 
app.use(express.static('public'))

//morgan
const morgan = require('morgan')
app.use(morgan('dev'))


//Routes
const homepageRouter = require('./routes/homepage')
const moviesRouter = require('./routes/movies')
const loginRouter = require('./routes/userlogin')

const registerRouter = require('./routes/userRegister')
====
//const logoutRouter = require("./routes/logout");


app.use('/', homepageRouter)
app.use('/movies', moviesRouter)
app.use('/userlogin', loginRouter)

app.use('/userRegister', registerRouter)


app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
})
