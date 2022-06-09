import axios from "axios";
const url = "http://54.87.232.33/api/v1/restaurants";

//send request for mock restaurants for homepage
export const getRestaurant = async (id: string) => {
  const restaurantsRes = await axios.get(`${url}/${id}`);
  return restaurantsRes.data;
};
