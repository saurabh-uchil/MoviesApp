const express = require('express')
const app = express()

//Port to listen
<<<<<<< HEAD
const PORT = process.env.PORT || 4000
=======
const PORT = process.env.PORT || 3000
>>>>>>> d452766f872793a8404a41637e2015eb537bca0c

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

<<<<<<< HEAD

app.use('/movies', moviesRouter)
app.use('/', homepageRouter)

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
=======
app.use('/',homepageRouter)
app.use('/movies',moviesRouter)
app.use('/userlogin', loginRouter)

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
})
>>>>>>> d452766f872793a8404a41637e2015eb537bca0c
