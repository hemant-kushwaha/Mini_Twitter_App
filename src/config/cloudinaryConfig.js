import cloudinaryPkg from 'cloudinary';
import dotenv from 'dotenv';

// Destructure v2 from cloudinary
const { v2: cloudinary } = cloudinaryPkg;

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log('Cloudinary configuration successful!');

export default cloudinary; // Export the configured cloudinary instance
