const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
    Title:{
        type:String,required:true
    },
   Images:[{
    type:String,required:true
   }]
},{
    timestamps:true
})

module.exports = mongoose.model('Gallery',GallerySchema);