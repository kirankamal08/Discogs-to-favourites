const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title:String,
    uri : {
        type :String,
        required:true,
        validate: {
            isAsync: true,
            validator: function(value, isValid) {
                const self = this;
                return self.constructor.findOne({ uri: value })
                .exec(function(err, user){
                    console.log(user);
                    if(err){
                        throw err;
                    }
                    else if(user) {
                        if(self.id === user.id) {  // if finding and saving then it's valid even for existing uri
                          return isValid(true);
                        }
                        return isValid(false);  
                    }
                    else{
                        return isValid(true);
                    }

                })
            },
            message:  'The Discogs is already Added'
        }
    },
    master_id : String,
    style : String
    
});
/* var Discogs = mongoose.model('favourites',{
    title     :{type : String},
    uri       :{type :String,required:true,unique:true},
    master_id :{type : String},
    style     :{type :String}
}); */
var Discogs = mongoose.model('favourites',schema);
module.exports = { Discogs };