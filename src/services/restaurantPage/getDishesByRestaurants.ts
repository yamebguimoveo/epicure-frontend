import axios from "axios";
const url = "http://54.87.232.33/api/v1/dishes";

//send request for mock restaurants for homepage
export const getDishesByRestaurant = async (restaurantId: string) => {
  const dishesReq = await axios.get(`${url}/?restaurant=${restaurantId}`, );
  console.log(dishesReq.data);
  return dishesReq.data;
};
