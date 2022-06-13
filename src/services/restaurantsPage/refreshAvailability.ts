import axios from "axios";
const url = "http://54.87.232.33/api/v1/restaurants/updateAvailablity";

//send request for refresh availability of restaurant
export const refreshAvailablity = async () => {
  try {
    await axios.get(url);
    return;
  } catch (err) {
    console.log(err);
  }
};
