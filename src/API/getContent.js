import { API_URL } from "./API_URL";
import axios from "axios";

// Send form to back-end.
const sendFormData = async (payload) => {
  try {
    const result = await axios.post(API_URL + "/content", payload);
    if (result.data.status === 1) {
      console.log(result.data);
      return result.data;
    } else {
      console.log("API error: " + result.data);
    }
  } catch (error) {
    console.log("API down " + error);
  }
};

export default sendFormData;
