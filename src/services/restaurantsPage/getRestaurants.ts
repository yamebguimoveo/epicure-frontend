import axios from "axios";
const url = "http://54.87.232.33/api/v1/restaurants";

//send request for mock restaurants for homepage
export const getRestaurants = async (
  filter: string | null,
  page?: number,
  limit?: number
) => {
  let reqUrl = url;
  if (!!filter) {
    reqUrl = `${url}/?${filter}=true`;
  } else {
    reqUrl = `${url}`;
  }
  const restaurantsRes = await axios.get(reqUrl);
  console.log(restaurantsRes.data);
  return restaurantsRes.data;
};
