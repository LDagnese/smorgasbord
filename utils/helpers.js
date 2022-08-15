require("dotenv").config();
const cloudinary = require("cloudinary");

module.exports = {
  format_expensive: (num) => {
    let returnStr = "";

    for (let i = 0; i < parseInt(num); i++) {
      returnStr = returnStr + "$";
    }
    return returnStr;
  },
  cloudinary_url: ( inputHeight, inputWidth, id = "smorgasbord/Smorgasbord_z5pwyq") => {
    return cloudinary.url(id, {
      transformation: [
        {
          width: inputWidth,
          height: inputHeight,
          crop: "pad",
          gravity: "center",
          fetch_format: "auto",
          quality: "auto",
        },
        {
          default_image: "smorgasbord:Smorgasbord_z5pwyq.png",
        },
      ],
    });
  },
};
