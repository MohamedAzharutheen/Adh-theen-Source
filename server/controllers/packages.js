const PackageData = require('../models/PackageSchema')

exports.addPackage = async (req,res)=>{
    try {
       const {Price,PackageName,Depature,MekkahHotelName,MadhinaHotelName}= req.body;
       const image = req.file ? `/uploads/${req.file.filename}` : ''; // Save path to image
       const newPackage = await PackageData.create({Price,PackageName,Depature,MekkahHotelName,MadhinaHotelName,Image: image});
       res.status(201).json(newPackage);
           } catch (error) {
             res.status(500).json({ "Package not submitted": error.message });
           }
}


exports.getPackage = async (req,res) => {
 
  try {
   const package = await  PackageData.find({});
   res.status(200).json(package); 
  } catch (error) {
    res.status(400).json({error: error.message})
  }

}


exports.updatePackage = async (req,res) =>{
  try {
    const {id} = req.params;
    const { Price, PackageName, Depature, MekkahHotelName, MadhinaHotelName } = req.body;
    const updateData = { Price, PackageName, Depature, MekkahHotelName, MadhinaHotelName };
    if(req.file){
      updateData.Image = `/uploads/${req.file.filename}`;
    }
    console.log("Update Data:", updateData);
    const updatedPackage = await PackageData.findByIdAndUpdate(id,updateData,{new:true})
  if (!updatedPackage){
    return res.status(404).json({ message: 'Package not found' });
  }
  res.status(200).json({ message: 'Package updated successfully', updatedPackage });

}
  
  catch (error) {
    res.status(500).json({ message: 'Error updating package', error: error.message });
  }
}


exports.deletePackage = async (req,res)=>{
const {id} = req.params;
console.log("Deleting Package Data with ID:", id);
try {
  const deletPackage = await PackageData.findByIdAndDelete(id);
  if(!deletPackage){
    return res.status(404).json({message:"Package not found"});
}
res.status(200).json({message:"Package Deleted Successfully"})
} catch (error) {
  res.status(500).json({error:error.message});
}

}


