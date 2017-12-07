/*mongoose start*/
var mongoose = require('mongoose'),
    passportLocalMongoose=require('passport-local-mongoose');
// mongoose.connect("mongodb://localhost/webstarter")

var TodoSchema = new mongoose.Schema({
  todo:String,
  id:Number
}, {
    timestamps: true
});

TodoSchema.plugin(passportLocalMongoose);

module.exports =mongoose.model("Todo",TodoSchema);
/*mongoose end*/