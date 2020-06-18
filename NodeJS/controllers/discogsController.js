const express = require('express');
var router = express.Router();
const paginate = require('jw-paginate');
var ObjectId = require('mongoose').Types.ObjectId;
var { Discogs } = require('../models/discogs');


/* router.get('/show', (req, res) => {
   let genre = [req.query.style];
   let genre1 = req.query.style;
    //  console.log(genre);
   let query = {style:genre};   
  // { 'country': { $regex: new RegExp(`^${countryName}$`, 'i') } };
   let query1 ={'style': {$regex: new RegExp(`^${genre1}$`, 'i')}};
    Discogs.find(query1, (err, data) => {
       // console.log(err); 
        if (!err) { res.send(data); }
        else { console.log('Error in Retriving Discogs :' + JSON.stringify(err, undefined, 2)); }
      });
}); */

router.get('/show', (req, res) => {
    const page = parseInt(req.query.pageF) || 1;
    const pageSize = 5;
   let genre = [req.query.style];
   let genre1 = req.query.style;
    //  console.log(genre);
   let query = {style:genre};   
  // { 'country': { $regex: new RegExp(`^${countryName}$`, 'i') } };
   let query1 ={'style': {$regex: new RegExp(`^${genre1}$`, 'i')}};
    Discogs.find(query1, (err, data) => {
      //  console.log(data);
        var check_length = data.length;
             const pager1 = paginate(check_length,page,pageSize);
             const pageOfItems1 = data.slice(pager1.startIndex, pager1.endIndex + 1);
         //    console.log(check_length);
         //    console.log(pager1);
         //    console.log(pageOfItems1);
         //   console.log('filter aaa'); 

        if (!err) {// res.send(data);
            return res.send({ pager1, pageOfItems1 ,genre1});
         }
        else { console.log('Error in Retriving Discogs :' + JSON.stringify(err, undefined, 2)); }
      });
});


// New Get route with pagination method

router.get('/', (req, res) => {
  //  const page = parseInt(req.query.page) || 1;
  const page = parseInt(req.query.page) || 1;
    const pageSize = 5;
    Discogs.find((err, docs) => {
            // console.log(docs); 
            var check_length = docs.length;
             const pager = paginate(check_length,page,pageSize);
             console.log("inside full data get");
            // console.log(pager);
             const pageOfItems = docs.slice(pager.startIndex, pager.endIndex + 1);
             console.log(pageOfItems); 
             console.log("inside full");
             return res.send({ pager, pageOfItems });
            // if (!err) { res.send(docs); }
            // else { console.log('Error in Retriving Discogs :' + JSON.stringify(err, undefined, 2)); }
         });
 });
// New Get route with pagination method

router.post('/', (req, res) => {
  //  console.log(req.body);
    var dis = new Discogs({
        title: req.body.title,
        uri: req.body.uri,
        master_id: req.body.master_id,
        style: req.body.style[0],
    });
    //console.log(dis);
    dis.save((err, doc) => {
        //console.log(doc);
        if (!err) { res.send(doc); console.log('success');}
        else { 
            console.log('Error in Discogs Save :' + JSON.stringify(err, undefined, 2));
            res.send(err);
            }
    });
    
});

router.delete('/remove/:id', (req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Discogs
        .findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Discogs Delete :' + JSON.stringify(err, undefined, 2)); }
        });
});

module.exports = router;