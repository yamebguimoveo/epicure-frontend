import { Homepage } from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import { RestaurantsPage } from "./pages/restaurants/RestaurantsPage";
import { RestaurantPage } from "./pages/single-restaurant-page/RestaurantPage";

export const Main = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='restaurants' element={<RestaurantsPage />}></Route>
        <Route path='restaurant/:restaurantId' element={<RestaurantPage />} />
        <Route path='*' element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </main>
  );
};
