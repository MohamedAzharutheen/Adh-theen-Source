// const multer = require('multer');
// const path = require('path');
// const { v4: uuidv4 } = require('uuid');

// // Set up storage configuration

// const storage = multer.diskStorage({
//     destination: (req, file , cb)=>{
//         // cb(null,'../client/public/uploads');
//            cb(null,'../client/public/uploads');
        

//     },
//     filename:(req,file,cb)=>{
//         // cb(null,Date.now()+ path.extname(file.originalname)); // Set unique filename with timestamp
//          cb(null,uuidv4() + "_" + path.basename(file.originalname, path.extname(file.originalname)) + path.extname(file.originalname)); // Set unique filename with timestamp

// //          const guid = uuidv4();
// //   const fileName = path.basename(file.originalname, path.extname(file.originalname)); // Get filename without extension
// //   const fileExtension = path.extname(file.originalname); // Get extension with dot (e.g., ".jpg")

// //   const uniqueName = cb(null,`${guid}-${fileName}${fileExtension}`); 
//         }
// })

 
// const upload = multer({
//     storage: storage,
//     limits:{fileSize: 5 * 1024 * 1024},  // Limit to 5MB (optional)
// })


// module.exports = upload;

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../utils/cloudinary')


// Set up Cloudinary storage for multer

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:'packages', // Folder name in Cloudinary
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
        public_id:(req,file)=> `${Date.now()}-${file.originalname.split('.')[0]}`, // Unique file naming
    }
})

const upload = multer({storage});

module.exports = upload