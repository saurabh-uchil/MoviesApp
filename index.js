const express = require('express')
const app = express()

//Port to listen
const PORT = process.env.PORT

//Middleware to parse req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

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

app.use('/',homepageRouter)
app.use('/movies',moviesRouter)

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})