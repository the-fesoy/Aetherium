const { result } = require("lodash");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_CLOUD_KEY,
  api_secret: process.env.PRIVATE_API_CLOUD_KEY,
});

const cloudinaryUploadingImg = async (fileToBeUploaded) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      fileToBeUploaded,
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id,
          });
        }
      }
    );
  });
};
const cloudinaryDeletingingImg = async (fileToBeDeleted) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(
      fileToBeDeleted, 
      { resource_type: "image" }, 
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);  
        }
      }
    );
  });
};




module.exports = { cloudinaryUploadingImg, cloudinaryDeletingingImg };
