const BannerData = require('../models/BannerSchema');
const mongoose = require("mongoose");


// Post to Student Data Send To Mongodb Database
// exports.bannerdata = async (req, res) => {
//     try {
//         const {Price,Depature,PackageName}= req.body
//       const newBanner = new BannerData({Price,Depature,PackageName});
//       await newBanner.save();
//       res.status(201).json({ message: 'Banner Added Successfully' });
//     } catch (error) {
//       res.status(500).json({ "Banner not submitted": error.message });
//     }
//   };

 //Banner Data Get To Mongodb Database

 exports.getbannerdata = async(req,res)=>{
    try {
        const bannerdata = await BannerData.find({});
        res.status(200).json(bannerdata);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
 }

   // Banner Data Update in Mongodb Database


   exports.updatebannerdata = async (req, res) => {
       let { bannerId } = req.params;
       console.log("Updating Banner With Id:", bannerId);
   
       // Validate if bannerId is a 24-character hexadecimal string
       if (!mongoose.Types.ObjectId.isValid(bannerId)) {
           return res.status(400).json({ error: "Invalid Banner ID format." });
       }
   
       try {
           const {Price, Depature, PackageName } = req.body;
   
           const updatedBanner = await BannerData.findByIdAndUpdate(
               bannerId,
               { Price, Depature, PackageName },
               { new: true }
           );
   
           if (!updatedBanner) {
               return res.status(404).json({ message: "Banner Not Updated" });
           }
   
           res.status(200).json({
               message: "Banner Updated Successfully",
               BannerData: updatedBanner
           });
   
       } catch (error) {
           console.error("Error updating banner:", error.message);
           res.status(500).json({ error: error.message });
       }
   };
   

   