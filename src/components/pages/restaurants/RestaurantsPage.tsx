import React, { Fragment, useEffect, useState } from "react";
import { Card } from "../../reusable/Card";
import { FilterNavbar } from "../../reusable/FilterNavbar";
import { getRestaurants } from "../../../services/restaurantsPage/getRestaurants";
import ReactLoading from "react-loading";

export const RestaurantsPage = (props: {}) => {
  const [filterTerm, setFilterTerm] = useState<string>("All");
  const [restaurants, setRestaurants] = useState<Restaurant[]>();

  useEffect(() => {
    async function getRests() {
      let filter = null;
      switch (filterTerm) {
        case "Most Popular":
          filter = "mostPopular";
          break;
        case "Open":
          filter = "isOpen";
          break;
        case "New":
          filter = "new";
          break;
        default:
          break;
      }
      const restaurantsReq = await getRestaurants(filter);
      setRestaurants(restaurantsReq.data.restaurants);
    }
    getRests();
  }, [filterTerm]);

  const handleFilter = (newFilterTerm: string) => {
    if (newFilterTerm !== filterTerm) {
      setFilterTerm(newFilterTerm);
    }
  };

  if (!restaurants) {
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
    <Fragment>
      <h2 className='page-title'>RESTAURANTS</h2>
      <FilterNavbar
        filterTerms={["All", "New", "Most Popular", "Open"]}
        activeFilterTerm={filterTerm}
        handlerFunc={handleFilter}
      />
      <div className='restaurants-cards'>
        {restaurants.map((restaurant, index) => {
          return <Card key={index} data={restaurant} />;
        })}
      </div>
    </Fragment>
  );
};
