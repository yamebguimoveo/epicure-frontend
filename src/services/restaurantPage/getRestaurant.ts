import axios from "axios";
const url = "http://localhost:3001/api/v1/restaurants";

//send request for mock restaurants for homepage
export const getRestaurant = async (id: string) => {
  const restaurantsRes = await axios.get(`${url}/${id}`);
  console.log(restaurantsRes.data);
  return restaurantsRes.data;
};
