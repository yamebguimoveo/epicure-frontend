import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FilterNavbar } from "../../reusable/FilterNavbar";
import { Card } from "../../reusable/Card";
import Popup from "reactjs-popup";
import ReactLoading from "react-loading";
import { DishModal } from "./DishModal";
import { getRestaurant } from "../../../services/restaurantPage/getRestaurant";
import { getDishesByRestaurant } from "../../../services/restaurantPage/getDishesByRestaurants";
import { sortByMealType } from "../../../utils/filter";

type Meal = "Breakfast" | "Lunch" | "Dinner";

export const RestaurantPage = () => {
  const { restaurantId } = useParams<string>();

  const [filterTerm, setFilterTerm] = useState<Meal>("Breakfast");
  const [dishModal, setDishModal] = useState<Dish | null>(null);
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [dishes, setDishes] = useState<Dish[]>();

  useEffect(() => {
    async function getRestaurantPageData() {
      if (restaurantId) {
        const restaurantReq = await getRestaurant(restaurantId);
        const dishesReq = await getDishesByRestaurant(restaurantId);
        setRestaurant(restaurantReq.data.restaurant);
        setDishes(dishesReq.data.dishes);
      }
    }
    getRestaurantPageData();
  }, []);

  const handleClickOnDish = (dish: Dish) => {
    console.log(dish);
    if (dishModal === null) {
      setDishModal(dish);
      document.body.style.overflow = "hidden";
    } else {
      setDishModal(null);
      document.body.style.overflow = "unset";
    }
  };

  const handleCloseModal = () => {
    setDishModal(null);
    document.body.style.overflow = "unset";
  };

  const handleFilter = (newFilterTerm: Meal) => {
    if (newFilterTerm !== filterTerm) {
      setFilterTerm(newFilterTerm);
    }
  };

  if (restaurant === undefined || dishes === undefined) {
    return (
      <ReactLoading
        type={"balls"}
        color={"#f7e0b2"}
        height={"20%"}
        width={"10%"}
      />
    );
  }

  return (
    <section className='restaurant-page'>
      <img
        className='restaurant-page-image'
        src={restaurant!.imageSrc}
        alt={restaurant!.name}
      ></img>
      <h2 className='restaurant-title'>{restaurant!.name}</h2>
      <h3 className='restaurant-chef'>{restaurant!.chef.name}</h3>
      <h4 className='restaurant-availability'>
        <img src={"/assets/icons/clock-icon.svg"} alt='clock'></img>
        <span>{restaurant.isOpen ? "Open Now" : "Closed"}</span>
      </h4>

      <FilterNavbar
        activeFilterTerm={filterTerm}
        filterTerms={["Breakfast", "Lunch", "Dinner"]}
        handlerFunc={handleFilter}
      />
      <div className='dish-cards'>
        {sortByMealType(dishes, filterTerm).map((dish, index) => {
          return (
            <Popup
              key={index}
              open={dishModal !== null ? true : false}
              trigger={
                <Card openModalHandler={handleClickOnDish} data={dish} />
              }
              modal
            >
              <DishModal
                dish={dish}
                closeModalHandler={handleCloseModal}
                sideDishes={["White Bread", "Sticky Rice"]}
                changes={["Without Peanuts", "Less Spicy"]}
              />
            </Popup>
          );
        })}
      </div>
    </section>
  );
};
