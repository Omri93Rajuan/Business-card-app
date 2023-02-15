import { shape, string, number, arrayOf, oneOfType } from "prop-types";
import addressType from "../../cards/models/types/addressType";
import imageType from "../../cards/models/types/imageType";

const userType = shape({
  _id: string,
  name: arrayOf(string),
  address: addressType.isRequired,
  image: imageType.isRequired,
  bizNumber: number.isRequired,
  phone: string.isRequired,
  web: oneOfType([string]).isRequired,
  email: string.isRequired,
  user_id: string.isRequired,
  createdAt: string.isRequired,
  isbusiness:string.isRequired,
  isAdmin:string.isRequired,

});

export default userType;
