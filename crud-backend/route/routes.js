const express = require('express');
const router = express.Router();

const Item = require('../model/shoppingItem');

//retrieve items
router.get('/items', (req, res, next) => {
    Item.find(function (err, items) {
        if(err){
            res.json(err);
        }
        else{
            res.json(items);
        }
    });
});

//inserting new data
router.post('/item', (req, res, next) => {
    let newShoppingItem = new Item({
	    item_no: req.body.item_no,
        item_name: req.body.item_name,
        size:req.body.size,
        item_price: req.body.item_price,
        item_quantity: req.body.item_quantity
    });
    newShoppingItem.save((err, item)=>{
         if (err) {
             res.json(err);
         }
         else {
             res.json({ msg: 'item added successfully' });
         }
     });

});

//updating items
router.put('/item/:id', (req, res, next) =>{
    Item.findOneAndUpdate({_id: req.params.id},{
        $set:{
            item_no: req.body.item_no,
            item_name: req.body.item_name,
            size:req.body.size,
            item_price: req.body.item_price,
            item_quantity: req.body.item_quantity
            }
    },
    function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    
    })
});

//delete items
router.delete('/item/:id', (req, res, next) => {
     Item.remove({ _id: req.params.id }, function (err, result) {
         if (err) {
             res.json(err);
         }
         else {
             res.json(result);
         }
     });
});


module.exports = router;