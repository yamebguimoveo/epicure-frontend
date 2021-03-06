import React, { Fragment, useEffect, useState } from "react";
import { Card } from "../../reusable/Card";
import { FilterNavbar } from "../../reusable/FilterNavbar";
import { getRestaurants } from "../../../services/restaurantsPage/getRestaurants";
import ReactLoading from "react-loading";
import { useMediaQuery } from "react-responsive";
import { refreshAvailablity } from "../../../services/restaurantsPage/refreshAvailability";
import { Pagination } from "./Pagination";

export const RestaurantsPage = (props: {}) => {
  const [filterTerm, setFilterTerm] = useState<string>("All");
  const [restaurants, setRestaurants] = useState<Restaurant[]>();
  const [pageNumber, setPageNumber] = useState(1);
  const [restsExistNumber, setRestsExistNumber] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const numberCardsOnPage = isMobile ? 8 : 9;

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
      // if (filter === "isOpen") {
      //   await refreshAvailablity();
      // }
      setRestaurants(undefined);
      const restaurantsReq = await getRestaurants(filter, 1, numberCardsOnPage);
      setPageNumber(1);
      setRestaurants(restaurantsReq.data.restaurants);
      setRestsExistNumber(restaurantsReq.data.count);
    }
    getRests();
  }, [filterTerm]);

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
      setRestaurants(undefined);
      const restaurantsReq = await getRestaurants(
        filter,
        pageNumber,
        numberCardsOnPage
      );
      setRestaurants(restaurantsReq.data.restaurants);
      setRestsExistNumber(restaurantsReq.data.count);
    }
    getRests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const handleChangePage = (page: number) => {
    setPageNumber(page);
  };
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
      <Pagination
        changeFunction={handleChangePage}
        pageCount={Math.ceil(restsExistNumber / numberCardsOnPage)}
        activePage={pageNumber}
      />
    </Fragment>
  );
};
