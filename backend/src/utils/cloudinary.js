import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

export const uploadFile = async (
  buffer,
  folder = "user/uploads",
  format = "jpg"
) => {
  try {
    return new Promise((resolve, reject) => {
      const cld_upload_stream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          folder: folder,
        },
        (error, result) => {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            // console.log(result);
            resolve(result);
          }
        }
      );

      streamifier.createReadStream(buffer).pipe(cld_upload_stream);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
