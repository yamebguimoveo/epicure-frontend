import axios from "axios";
const url = "http://54.87.232.33/api/v1/homepage";

//send request for mock restaurants for homepage
export const getHomepageData = async () => {
  const dishesReq = await axios.get(`${url}`);
  console.log(dishesReq);
  return dishesReq.data.data;
};
