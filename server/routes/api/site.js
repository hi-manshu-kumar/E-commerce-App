const router = require('express').Router();

// Site model
const { Site }    = require('../../models/site');

// Middlewares
const { auth }  = require('../../middleware/auth');
const { admin } = require ('../../middleware/admin');

// ============================================================
//                   SITE
// ============================================================

router.get('/site_data', (req, res)=> {
    Site.find({}, (err, site)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send( site[0].siteInfo )
    })
})

router.post('/site_data', auth, admin, (req, res)=> {
    Site.findOneAndUpdate(
        {name: 'Site'},
        {"$set": {siteInfo: req.body}},
        {new: true},
        (err, doc) => {
            if(err) return res.json({success:false, err});
            return res.status(200).send({
                success: true,
                siteInfo: doc.siteInfo
            })
        }
    )
});

module.exports = router;
