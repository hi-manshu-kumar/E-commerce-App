const router = require('express').Router();

//Models
const { Brand }   = require('../../models/brand');
const { Wood }    = require('../../models/wood');
const { Product } = require('../../models/product');

// Middlewares
const { auth }  = require('../../middleware/auth');
const { admin } = require ('../../middleware/admin');


// ============================================================
//                   PRODUCTS
// ============================================================

router.post('/shop', (req, res) => {
    let order    = req.body.order ? req.body.order : 'desc';
    let sortBy   = req.body.sortBy ? req.body.sortBy : "_id";
    let limit    = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip     = parseInt(req.body.skip);
    let findArgs = {};

    for(let key in req.body.filters){
        if(req.body.filters[key].length >0 ){
            if(key === 'price'){
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            } else {
                findArgs[key] = req.body.filters[key]
            }
        }
    }
    
    findArgs['publish'] = true;

    Product.
    find(findArgs).
    populate('brand').
    populate('wood').
    sort([[sortBy, order]]).
    skip(skip).
    limit(limit).
    exec((err, articles) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({
            size: articles.length,
            articles: articles
        });
    })

    res.status(200);
})


// By ARRIVAL
// /articles?sotyBy=createdAt&order=desc&limit=4

// By SELL
// /articles?sortBy=sold&order=desc&limit=4&skip=5 
router.get('/articles', (req, res) => {
    let order  = req.query.order ? req.query.order: 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy: '_id';
    let limit  = req.query.limit ? parseInt(req.query.limit): 100;
    
    Product.
    find().
    populate('brand').
    populate('wood').
    sort([[sortBy, order]]).
    limit(limit).
    exec((err, articles) => {
        if(err) return res.status(400).send(err);
        res.send(articles);
    });
});

router.post('/article', auth, admin, (req, res) => {
    const product = new Product(req.body);
    
    product.save((err, doc) => {
        if(err) return res.json({success: false, err});
        res.status(200).json({
            success: true,
            article: doc
        }); 
    })
});

// /article?id=LDKSHFL,SDLFJH,SLJDFHL&type=array
router.get('/articles_by_id', (req, res) => {
    let type = req.query.type;
    let items = req.query.id;

    if(type==="array"){
        let ids = req.query.id.split(',');
        items = [];
        items = ids.map( item => {
            return mongoose.Types.ObjectId(item)
        })
    }

    Product.
    find({'_id': {$in: items}}).
    populate('brand').
    populate('wood').
    exec((err, docs) => {
        return res.status(200).send(docs)
    })
});

// ============================================================
//                   WOODS
// ============================================================

router.post('/wood', auth, admin, (req, res) => {
    const wood =new Wood(req.body);

    wood.save((err, doc) => {
        if(err) return res.json({success: false, err});
        res.status(200).json({
            success: true,
            wood: doc
        })
    });
});

router.get('/woods', (req, res) => {
    Wood.find({}, (err, woods) => {
        if(err) return res.status(400).send(err);
        res.status(200).send(woods);
    })
});

// ============================================================
//                   BRAND
// ============================================================

router.post('/brand', auth, admin, (req, res) => {
    const brand = new Brand(req.body);

    brand.save((err, doc) => {
        if(err) return res.json({ success: false, err});
        res.status(200).json({
            success:true,
            brand: doc
        })
    })
});

router.get('/brands', (req, res) => {
    Brand.find({}, (err, brands) => {
        if(err) return res.status(400).send(err);
        res.status(200).send(brands);
    });
});

module.exports = router;