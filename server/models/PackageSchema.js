const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema(
    {
        Price : String,
        Depature: String,
        PackageName: String,
        MekkahHotelName: String,
        MadhinaHotelName: String,
        Image: String 
    },{timestamps:true}
)

module.exports = mongoose.model('Package',PackageSchema);