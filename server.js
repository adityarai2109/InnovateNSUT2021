const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const passport = require('passport')
const LocalStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')

const mongoose = require('mongoose'); // mongoDB connection through moongose


mongoose.connect("mongodb://localhost:27017/nsutDB", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!')) // promise resolved
    .catch(err => {
        console.log(error in connecting);
    });

mongoose.set("useCreateIndex", true)


app.listen(port, () => console.log(`Server running on port ${port}`));

app.set('views', './public/views') // setting ejs
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({
    extended: true
}))

app.use(bodyParser.urlencoded({ // used to get posted date on page 
    extended: true
}))

app.use(passport.initialize())

app.get('/', (req, res) =>{
    if(req.isAuthenticated()){
        res.send('hello')
    }
    else {
        res.redirect('/login')
    }
})

app.get('/login', (req, res) => {
    if(req.isAuthenticated()){
        res.redirect('/')
    }
    else {
        res.render('login') 
    }
})

app.get('/register', (req, res) => {
    if(req.isAuthenticated()){
        res.redirect('/')
    }
    else {
        res.render('register')
    }
})

app.get('/home', (req, res) => {
    
    if(req.isAuthenticated()){
        res.render('main')
    }
    else {
        res.redirect('/login')
    }
    
})

const userSchema = new mongoose.Schema ({
    username:{
        type : String
    } ,
    password:{
        type : String
    } 
});

userSchema.plugin(passportLocalMongoose)


const User = new mongoose.model("User", userSchema); // model name is User that uses userSchema

passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.post('/register', (req, res) => {
    User.register(new User({username : req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err)
            res.redirect('/register')
        }
        else{
            passport.authenticate('local')(req, res, function(){
                res.redirect('/home')
            })
        }
    })
});

app.post('/login', passport.authenticate('local', { successRedirect:'/',
                                                    failureRedirect: '/login' }));

