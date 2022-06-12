import axios from "axios";
const url = "http://54.87.232.33/api/v1/restaurants";

//send request for mock restaurants for homepage
export const getRestaurants = async (
  filter: string | null,
  page?: number,
  limit?: number
) => {
  let reqUrl = url;
  console.log(`page+${page}+limit+${limit}`);

  if (!!filter) {
    reqUrl = `${url}/?${filter}=true`;
    if (!!page && !!limit) {
      reqUrl = `${reqUrl}&page=${page}&limit=${limit}`;
    }
  } else {
    reqUrl = `${url}`;
    if (!!page && !!limit) {
      reqUrl = `${url}/?page=${page}&limit=${limit}`;
    }
  }
  const restaurantsRes = await axios.get(reqUrl);
  return restaurantsRes.data;
};
