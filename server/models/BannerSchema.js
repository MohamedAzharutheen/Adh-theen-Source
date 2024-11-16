const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema(
    {
        Price : String,
        Depature: String,
        PackageName: String
    },{timestamps:true}
)

module.exports = mongoose.model('BannerData',BannerSchema);