const Gallery = require('../models/GallerySchema');

exports.addGallery = async (req,res)=>{

    try {
        const {Title} = req.body
        // Map through each file and get its path
        const images = req.files.map(file => `/uploads/${file.filename}`);
        const newGallery = new Gallery({Title,Images: images });
        await newGallery.save();
        res.status(201).json({message: 'Gallery entry created',gallery: newGallery })
    } catch (error) {
        res.status(500).json({ message: 'Error adding gallery entry', error });
    }

}


exports.getGallery = async (req,res)=>{
    try {
        const gallery = await Gallery.find({});
        res.status(200).json(gallery); 

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

  const fs = require('fs');
  const path = require('path');
  
  const deleteFiles = (filePaths) => {
    filePaths.forEach(filePath => {
      // Resolve the full path of the file in a more consistent way
      const fullPath = path.resolve(__dirname, '../../client/public/uploads', path.basename(filePath));
      console.log(`Attempting to delete file at: ${fullPath}`);  // Log full path for debugging
  
      // Check if the file exists before attempting deletion
      if (fs.existsSync(fullPath)) {
        fs.unlink(fullPath, (err) => {
          if (err) {
            console.error(`Error deleting file ${fullPath}:`, err.message);
          } else {
            console.log(`Successfully deleted file: ${fullPath}`);
          }
        });
      } else {
        console.warn(`File does not exist at: ${fullPath}, unable to delete.`);
      }
    });
  };
  

  exports.updateGallery = async (req, res) => {
      try {
        const { id } = req.params;
        const { Title, imagesToKeep, imagesToDelete } = req.body;
        const updatedData = {};
    
        if (Title) updatedData.Title = Title;
    
        let updatedImages = [];
    
        // Ensure imagesToKeep is an array
        if (Array.isArray(imagesToKeep)) {
          updatedImages = [...imagesToKeep];
        } else {
          updatedImages = [imagesToKeep]; // Fallback if it's not an array
        }
    
        console.log("imagesToKeep on backend:", imagesToKeep);
        // Add newly uploaded images
        if (req.files && req.files.length > 0) {
          const newImages = req.files.map(file => `/uploads/${file.filename}`);
          updatedImages = [...updatedImages, ...newImages];
        }
      
        // Remove images marked for deletion
        if (imagesToDelete && Array.isArray(imagesToDelete)) {
          updatedImages = updatedImages.filter(image => !imagesToDelete.includes(image));
          console.log("Updated Images after filtering:", updatedImages); // Log to verify
          deleteFiles(imagesToDelete);
        }
        console.log("imagesToDelete on backend:", imagesToDelete);
        updatedData.Images = updatedImages;
    
        const updatedGallery = await Gallery.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedGallery) return res.status(404).json({ message: 'Gallery not found' });
    
        res.status(200).json({ message: 'Gallery updated successfully', updatedGallery });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating Gallery', error: error.message });
      }
    }; 


  
  
exports.deleteGallery = async (req,res)=>{
    const {id} = req.params;
    console.log("Deleting Gallery Data with ID:", id);
    try {
       const deletGallery = await Gallery.findByIdAndDelete(id); 
       if(!deletGallery){
        return res.status(404).json({message:"Gallery not found"});
    }
    deleteFiles(deletGallery.Images);
    res.status(200).json({message:"Gallery Deleted Successfully"})

    } catch (error) {
      res.status(500).json({error:error.message});
    }
    
    }