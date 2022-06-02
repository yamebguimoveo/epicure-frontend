import React, { Fragment, useEffect, useState } from "react";
//import sections for home page
import { Hero } from "./Hero";
import { RecommendedRestaurants } from "./RecommendedRestaurants";
import { SignatureDishes } from "./SignatureDishes";
import { IconsSection } from "./IconsSection";
import { ChefOfTheWeek } from "./ChefOfTheWeek";
import { AboutUs } from "./AboutUs";
//import mock data
import { mockChef } from "../../../utils/mockData";
import { MobileLinksSection } from "../../mobile/MobileLinksSection";
//import services
import { getHomepageData } from "../../../services/homepage/getHomepageData";

export const Homepage = () => {
  const [recommendedRestaurants, setRecommendedRestaurants] = useState<
    Restaurant[] | null
  >(null);
  const [signatureDishes, setSignatureDishes] = useState<Dish[] | null>(null);
  const [ChefWeek, setChefWeek] = useState<Chef | null>(null);

  useEffect(() => {
    async function getDishesForHomepage() {
      const homepageReq = await getHomepageData();
      console.log(homepageReq);

      setChefWeek(homepageReq.chef);
      setRecommendedRestaurants(homepageReq.restaurants);
      setSignatureDishes(homepageReq.dishes);
    }
    getDishesForHomepage();
  }, []);

  return (
    <Fragment>
      <Hero />
      <MobileLinksSection />
      <RecommendedRestaurants restaurants={recommendedRestaurants} />
      <SignatureDishes dishes={signatureDishes} />
      <IconsSection />
      <ChefOfTheWeek chef={ChefWeek} />
      <AboutUs />
    </Fragment>
  );
};
