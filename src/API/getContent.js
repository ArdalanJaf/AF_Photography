import { API_URL } from "./API_URL";
import axios from "axios";

// Send form to back-end.
const sendFormData = async (payload) => {
  try {
    const result = await axios.get(API_URL + "/content");
    if (result.data.status === 0) {
      console.log("API error: " + result.data);
    } else {
      // console.log(result.data);
      return result.data;
    }
  } catch (error) {
    console.log("API down " + error);
  }
};

export default sendFormData;
