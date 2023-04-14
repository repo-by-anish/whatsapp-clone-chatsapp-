const express = require("express")
const User= require("./Models/user")
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
const session = require('express-session');
const cors=require("cors")
const passport = require("passport");
const routUrls=require("./Routes/routes");

mongoose.set('strictQuery', false);

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());

app.use(passport.session());


mongoose.connect("mongodb://127.0.0.1:27017/ChatDB");

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(cors());

app.use("/chatsapp",routUrls);




app.listen(8080);



//  const express = require('express');
// const passport = require('passport');
// const passportLocalMongoose = require('passport-local-mongoose');
// const expressSession = require('express-session');

// // Create the Express App
// const app = express();

// // Set up the Express App to use sessions
// app.use(expressSession({
//     secret: 'secretkey',
//     resave: false,
//     saveUninitialized: false
// }));

// // Connect Passport to Express App
// app.use(passport.initialize());
// app.use(passport.session());

// // Set up the passport.js authentication system
// passport.use(new passportLocalMongoose({
//     usernameField: 'username',
//     passwordField: 'password'
// }));

// // Serialize user instance to the session
// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// // Deserialize user instance from the session
// passport.deserializeUser((id, done) => {
//     User.findById(id).then((user) => {
//         done(null, user);
//     });
// });

// // Connect the Express App to the Mongoose Database
// mongoose.connect('mongodb://localhost/auth-system', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// // Connect to the Mongoose Database
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('Successfully connected to MongoDB');
// });

// // Set up routes
// app.use('/', require('./routes/index'));

// // Start the server
// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });