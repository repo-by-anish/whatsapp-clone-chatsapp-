const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../Models/user");

router.post("/register", (req, res) => {


    User.register(new User({ username: req.body.username, first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email }), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            res.send({message:"Something went wrong."});
        } else {
            passport.authenticate("local")(req, res, () => {
                res.send({
                    userDetail: {
                        name: req.user.first_name + " " + req.user.last_name,
                        friendRequest: req.user.friendRequests,
                        message: req.user.message,
                        friendList: req.user.friendList
                    }
                });
            })

        }
    })

})

router.post('/login', passport.authenticate('local', { failureRedirect: '/login'}), function (req, res) {
    res.send(req.user);
});
// router.post("/login",(req,res)=>{
    
//     const user=new User({
//         username: req.body.username,
//         password: req.body.password
//     })
//     req.login(user, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             passport.authenticate("local")(req, res, () => {
//                 res.send(req.user);
//             })
//         }
//     })
// })

router.get('/logout', function (req, res) {
    req.logout((err) => {
        if (!err)
            console.log("logged out");
    });
});

router.get("/", (req, res) => {
    if(req.isAuthenticated){
        if (req.user===undefined) {
            res.send({loginStatus:false});
        }else{
            res.send({loginStatus:true});
        }
    }
})

module.exports = router;