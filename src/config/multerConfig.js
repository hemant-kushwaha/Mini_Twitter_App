import cloudinary from './cloudinaryConfig.js'; // Import the configured Cloudinary instance
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from "multer";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    console.log('Inside params function', file); // Yaha file ko log kar sakte ho
    return {
      folder: 'ml_default',
      format: 'png', // can also dynamically set based on file mimetype
      public_id: `tweet_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
    };
  },
});

  const C_uploader = multer({ storage: storage });

  export default C_uploader;

