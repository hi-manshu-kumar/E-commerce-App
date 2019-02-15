const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
var mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/waves", {
    useNewUrlParser: true
});

app.use(express.urlencoded({
    extended: false
}));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("database up and running");
});
app.use(express.json());
app.use(cookieParser());

// Models
const {
    User
} = require('./models/user');

// ============================================================
//      USERS
// ============================================================

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({
            success: false,
            err
        });
        res.status(200).json({
            success: true,
            userdata: doc
        });
    })
});

app.post('/api/users/login', (req, res) => {
    let email = req.body.email;

    User.findOne({'email': email}, (err, user) => {
        if(!user) return res.json({
            loginSuccess: false,
            message: "Auth fails, email not found"
        });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) return res.json({loginSuccess:false, message:'Wrong password'});
        });
    })
})

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});