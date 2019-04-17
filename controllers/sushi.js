const express = require('express');
const router  = express.Router();
const Sushi  = require('../models/sushi');



// INDEX ROUTE
router.get('/', (req, res) => {
    Sushi.find({}, (err, allSushi)=>{
        if(err){
            console.log(err)
        }else{
            console.log(allSushi);
            res.render('index.ejs', {sushi: allSushi})
        }
    }
    )
});

// CREATE ROUTE
router.post('/', (req, res) => {
    if(req.body.isRaw === 'on'){
        req.body.isRaw = true;
    }else{
        req.body.isRaw = false
    }
    Sushi.create(req.body, (err, newSushi) => {
        if(err){
            console.log(err)
        }else{
            console.log(newSushi)
            res.redirect('/sushi')
        }
    });
});

// NEW ROUTE
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// SHOW ROUTE
router.get('/:id', (req, res)=>{
    Sushi.findOne({_id: req.params.id}, ( err, foundSushi) =>{
    if (err){
        res.send(err);
    } else {
        console.log(foundSushi);
        if(foundSushi != null){
            res.render('show.ejs', {sushi: foundSushi});

        } else {
            res.send('no sushi found');
        }
    }
 })
}); 

module.exports = router; 