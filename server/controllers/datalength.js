const express = require('express');
const GallerySchema = require('../models/GallerySchema');
const PackageSchema = require('../models/PackageSchema');




exports.DataLength = async (req,res)=>{

try {
    const galleryCount = await GallerySchema.countDocuments({});
    const packageCount = await PackageSchema.countDocuments({});
    res.status(200).json({message:'Data fetched successfully',galleryCount,packageCount})
} catch (error) {
   res.status(500).json({ message: 'Error fetching data', error: error.message }) 
}

}