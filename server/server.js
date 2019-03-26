require('dotenv').config();
const express      = require('express');
const {mongoose}   = require('./db/mongoose.js');
const cookieParser = require('cookie-parser');

const site       = require('./routes/api/site');
const user       = require('./routes/api/users');
const product    = require('./routes/api/product');
const appRoutes  = require('./utils/appRoutes')

const app = express();
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cookieParser());

app.use(express.static('client/build'));

app.use(appRoutes.product, product)
app.use(appRoutes.users, user);
app.use(appRoutes.site, site);

// DEFAULT
if(  process.env.NODE_ENV === 'production' ){
    const path = require('path');
    app.get('/*', (req, res)=> {
        res.sendfile(path.resolve(__dirname, '../client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});